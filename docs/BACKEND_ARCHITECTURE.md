# LearnHub Backend Architecture Guide

## Overview

LearnHub follows **Clean Architecture** with a feature-based folder structure.

Each feature owns its own:

* Model
* Repository
* Domain Services
* Application Services
* Presenter
* Validators
* Controller
* Routes

This keeps features independent, maintainable, and easy to extend.

---

# Project Structure

```text
src/
├── config/
├── middleware/
├── shared/
│
├── features/
│
│   ├── auth/
│   ├── learning-paths/
│   ├── modules/
│   ├── sections/
│   ├── topics/
│   ├── notes/
│   ├── resources/
│   ├── playgrounds/
│   ├── quizzes/
│   └── interview-questions/
│
└── server.js
```

---

# Standard Feature Structure

Every feature must follow this layout.

```text
feature/

├── controllers/

├── dto/

├── models/

├── presenters/

├── repositories/

├── routes/

├── services/

│   ├── application/

│   └── domain/

└── validators/
```

---

# Layer Responsibilities

## Model

Responsible for:

* Database schema
* Indexes
* Relationships
* Defaults

Model must NOT contain business logic.

---

## Repository

Responsible for:

* Database access only

Repository should only perform operations like:

* Create
* Find
* Update
* Delete
* Count

Repository must NOT contain business rules.

---

## Domain Services

Responsible for reusable business rules.

Examples:

```text
ensureTopicExists()

ensureModuleExists()

ensureSectionExists()

ensureResourceExists()
```

Domain services may be reused by multiple application services.

---

## Application Services

Responsible for use cases.

Examples:

```text
createTopic()

updateTopic()

deleteTopic()

listTopics()
```

Application services orchestrate repositories and domain services.

---

## Presenter

Responsible for shaping API responses.

Never return Mongoose documents directly.

Always use presenters.

---

## Validators

Use `express-validator`.

Every feature should provide:

* Create Validator
* Update Validator
* Update Status Validator

---

## Controller

Controllers should:

* Read request
* Call application service
* Return ApiResponse

Controllers should NOT contain business logic.

---

## Routes

Routes should:

* Apply authentication
* Apply authorization
* Apply validation
* Call controller

Nothing else.

---

# Shared Components

Shared contains reusable utilities.

Examples:

```text
ApiError

ApiResponse

Enums

Builders

Utilities

Content Engine

Slug Generator
```

---

# Naming Convention

## Models

```text
topic.model.js
```

---

## Repository

```text
topic.repository.js
```

---

## Presenter

```text
topic.presenter.js
```

---

## Controller

```text
topic.controller.js
```

---

## Route

```text
topic.routes.js
```

---

## Validators

```text
topic.validator.js
```

---

## Application Services

```text
createTopic.service.js

updateTopic.service.js

deleteTopic.service.js

listTopics.service.js

getTopicBySlug.service.js

updateTopicStatus.service.js
```

---

## Domain Services

```text
ensureTopicExists.service.js
```

---

# CRUD Pattern

Every feature should expose the same operations.

```text
Create

List

Get By Slug

Update

Update Status

Delete
```

---

# Soft Delete

Never permanently delete records.

Instead:

```javascript
deletedAt = new Date();
updatedBy = userId;
```

Repositories should always exclude:

```javascript
deletedAt: null
```

---

# Status Lifecycle

Content lifecycle:

```text
Draft

↓

Published

↓

Archived
```

Never expose archived content to learners.

---

# Visibility

```text
Public

Private

Unlisted
```

Visibility controls who can access content.

---

# Subscription

```text
Free

Premium
```

This enables future monetization without schema changes.

---

# Error Handling

Always throw:

```javascript
ApiError
```

Never throw raw Error objects.

---

# Response Format

Every API should return:

```json
{
  "success": true,
  "message": "...",
  "data": {}
}
```

using the shared `ApiResponse` class.

---

# Feature Development Checklist

Every new feature must follow this order:

1. Model
2. Repository
3. Domain Service
4. Application Services
5. Presenter
6. Validators
7. Controller
8. Routes
9. Register Routes
10. Messages
11. Postman Tests
12. Git Commit

---

# Current Completed Features

```text
Authentication

Learning Paths

Modules

Sections

Topics

Notes

Resources
```

---

# Remaining Features

```text
Playgrounds

Quizzes

Interview Questions

Public Content APIs

Search

Progress

Bookmarks

History

AI
```

---

# Development Principles

* Keep business logic inside services.
* Keep repositories database-only.
* Reuse domain services.
* Use presenters for every response.
* Follow the same folder structure for every feature.
* Prefer consistency over cleverness.
* Build reusable components only after a real need emerges.

This document is the reference architecture for the LearnHub backend. Every new feature should follow these conventions to keep the codebase predictable, maintainable, and scalable.
