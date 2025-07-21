
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

# Configure CORS
origins = [
    "https://pysch-mvp.vercel.app",
    "https://parthtr9.github.io",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/topics")
def get_topics():
    with open("db.json") as f:
        data = json.load(f)
    return data
