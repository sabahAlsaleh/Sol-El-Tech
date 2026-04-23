"""Backend tests for Sol & El Tech API (health, status, contact endpoints)."""
import os
import uuid
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fallback: read from frontend/.env since backend tests run server-side
    try:
        with open("/app/frontend/.env", "r") as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.split("=", 1)[1].strip()
                    break
    except FileNotFoundError:
        pass

BASE_URL = (BASE_URL or "").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health check
class TestHealth:
    def test_api_root_ok(self, api_client):
        r = api_client.get(f"{API}/", timeout=20)
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Sol" in data["message"]


# POST /api/contact validation & happy path
class TestContactCreate:
    def test_contact_create_happy_path(self, api_client):
        tag = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"{tag} Anna Andersson",
            "email": f"{tag.lower()}@example.com",
            "phone": "070-123 45 67",
            "service": "Laddbox",
            "message": "Hej, jag behöver hjälp med laddbox installation.",
        }
        r = api_client.post(f"{API}/contact", json=payload, timeout=20)
        assert r.status_code == 201, f"got {r.status_code}: {r.text}"
        data = r.json()
        # No _id field leaked
        assert "_id" not in data
        # Fields mirror payload
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["service"] == payload["service"]
        assert data["message"] == payload["message"]
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data

    def test_contact_missing_name_returns_422(self, api_client):
        r = api_client.post(
            f"{API}/contact",
            json={"email": "x@example.com", "message": "hi"},
            timeout=20,
        )
        assert r.status_code == 422

    def test_contact_missing_email_returns_422(self, api_client):
        r = api_client.post(
            f"{API}/contact",
            json={"name": "A", "message": "hi"},
            timeout=20,
        )
        assert r.status_code == 422

    def test_contact_missing_message_returns_422(self, api_client):
        r = api_client.post(
            f"{API}/contact",
            json={"name": "A", "email": "x@example.com"},
            timeout=20,
        )
        assert r.status_code == 422

    def test_contact_empty_name_returns_422(self, api_client):
        r = api_client.post(
            f"{API}/contact",
            json={"name": "", "email": "x@example.com", "message": "hi"},
            timeout=20,
        )
        assert r.status_code == 422

    def test_contact_invalid_email_returns_422(self, api_client):
        r = api_client.post(
            f"{API}/contact",
            json={"name": "Ann", "email": "not-an-email", "message": "hi"},
            timeout=20,
        )
        assert r.status_code == 422

    def test_contact_optional_fields_nullable(self, api_client):
        tag = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"{tag} Bob",
            "email": f"{tag.lower()}b@example.com",
            "phone": None,
            "service": None,
            "message": "Minimal payload",
        }
        r = api_client.post(f"{API}/contact", json=payload, timeout=20)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["phone"] is None
        assert data["service"] is None


# GET /api/contact listing (no _id leakage, persistence verification)
class TestContactList:
    def test_contact_list_returns_list_without_id(self, api_client):
        # Seed one record we can look for
        tag = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"{tag} Persistence User",
            "email": f"{tag.lower()}p@example.com",
            "phone": "070-000 00 00",
            "service": "Solpaneler",
            "message": "Persistence verification",
        }
        created = api_client.post(f"{API}/contact", json=payload, timeout=20)
        assert created.status_code == 201
        created_id = created.json()["id"]

        r = api_client.get(f"{API}/contact", timeout=20)
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        for it in items:
            assert "_id" not in it
        # Our seeded record should be present
        ids = [it.get("id") for it in items]
        assert created_id in ids, "POSTed record not found in GET listing -> persistence failed"
