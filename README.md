# 🌆 Vibe Search
Intelligent, Vibe-Aware Place Discovery Using Client-Side AI

Vibe Search is a production-style web application that explores how client-side machine learning and generative AI can be combined to enhance location-based discovery beyond static filters like ratings and distance.

The project focuses on real-time intent understanding, predictive modeling, and ethical AI safeguards — all running entirely in the browser.

## 🎯 Motivation

Most location-based apps answer “where is it?”
Very few answer “what will it feel like when I get there?”

This project investigates:

How ML can estimate contextual signals (busyness, vibe)

How LLMs can translate human intent into structured search

How AI guardrails can be enforced at the UX layer

## 🧠 What This Project Demonstrates

This repository was built to showcase:

✅ Practical TensorFlow.js usage (training + inference)

✅ Controlled AI workflows (Gemini + validation)

✅ Safe AI integration (toxicity detection)

✅ Clean React architecture with async ML pipelines

✅ Real-world API orchestration (Maps, Places, AI)

## ✨ Key Features
1. Intent-Aware Search (LLM-powered)

Accepts natural language queries

Converts intent → structured search parameters

Strict JSON-based LLM outputs to avoid hallucination

2. Predictive Busyness Modeling (TensorFlow.js)

Lightweight regression model trained on time-series patterns

Runs entirely in-browser (no backend inference)

Produces human-readable vibe labels

3. ML Guardrails & Safety

Toxicity model screens user input

Prevents unsafe or abusive AI prompts

Demonstrates responsible AI design

4. Map-Centric UX

Google Maps integration with live markers

Distance-based ranking

Visual place selection + feedback loop

## 🧩 Technical Architecture
User Input
   ↓
Toxicity Filter (TFJS)
   ↓
Gemini Intent Parser
   ↓
Google Places Search
   ↓
TFJS Vibe Prediction
   ↓
React UI + Maps


No backend services
No user data storage
All intelligence runs locally

## 🛠️ Tech Stack
Category	Technology
Framework	React + Vite
Maps	Google Maps (vis.gl)
AI	Google Gemini
ML	TensorFlow.js
Safety	@tensorflow-models/toxicity
Styling	Inline / CSS
## ⚙️ Setup & Usage
npm install
npm run dev


Create a .env file:

VITE_GOOGLE_MAPS_API_KEY=your_key
VITE_GEMINI_API_KEY=your_key

## 🧪 Design Considerations

Client-side ML only to reduce infra complexity

Explicit tensor disposal to avoid memory leaks

Strict async sequencing for ML backend stability

Separation of AI, ML, and UI concerns

This project prioritizes engineering correctness over shortcuts.

## 📈 Potential Extensions

Real-time crowd signals

Model personalization

Web Worker–based ML offloading

Progressive Web App (PWA) support

Multi-user vibe aggregation

## 👤 About the Developer

This project reflects my interest in:

Human-centered AI systems

Applied machine learning

Building fast, reliable products under constraints

It was intentionally designed as a hackathon-ready codebase — modular, extensible, and demonstrably functional.

## 📄 License

MIT
