---
slug: philosophy-of-software-design
title: A Philosophy of Software Design
author: John Ousterhout
status: completed
rating: 5/5
category: Software Engineering
year: 2018
priority: High
link: https://web.stanford.edu/~ouster/cgi-bin/book.php
---

# A Philosophy of Software Design

## Metadata
- **Author:** John Ousterhout (2018)
- **Status:** Completed
- **Category:** Software Architecture / Modularity / Complexity Management
- **Rating:** 5/5 ★

---

## Why I Read This
Eines der besten Bücher zu Software-Design überhaupt: Komplexitätsmanagement, Deep Modules und sauberes API-Design.

## Summary & Synopsis
A focused guide on managing complexity in software by building deep modules with small interfaces and keeping internal mechanics hidden.

## Key Takeaways & Detailed Notes

### 1. The Nature of Complexity
- Complexity comes down to two main drivers: **dependencies** and **obscurity**.
- The main challenge in software system design is managing that complexity.

### 2. Deep Modules vs Shallow Modules
- **Deep Modules:** The best modules expose simple interfaces while containing substantial implementation logic internally.
- **Shallow Modules:** Modules with wide interfaces that do relatively little work. Keep them to a minimum.

### 3. Strategic vs Tactical Programming
- **Tactical Programming:** Rushing code out to finish a feature quickly without considering system health. This creates compounded technical debt.
- **Strategic Programming:** Consistently spending 10 to 20 percent of effort on clean module boundaries and long-term design health.

### 4. Define Errors Out of Existence
- Design APIs and data structures so unexpected inputs or corner cases either cannot happen or resolve naturally, rather than forcing callers to catch endless exceptions.

## Favorite Quote
> "The most important problem in computer systems design is managing complexity."

## Personal Review & Verdict
**5/5 ★**: Absolutes Highlight. Eines der stärksten und klarsten Bücher über Software-Architektur und Schnittstellen-Design.
