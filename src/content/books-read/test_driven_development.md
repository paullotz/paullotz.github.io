---
slug: test-driven-development
title: "Test Driven Development: By Example"
author: "Kent Beck"
status: completed
rating: 4/5
category: Software Craftsmanship
year: 2002
priority: High
link: https://www.oreilly.com/library/view/test-driven-development/0321146530/
---

# Test Driven Development: By Example

## Metadata
- **Author:** Kent Beck (2002)
- **Status:** Completed
- **Category:** Software Craftsmanship / Testing / TDD
- **Rating:** 4/5 ★

---

## Why I Read This
Das klassische TDD-Buch von Kent Beck — der Urtext, um den Red-Green-Refactor-Zyklus nicht nur zu kennen, sondern ihn am konkreten Beispiel mitzuerleben.

## Summary & Synopsis
Kent Beck führt Schritt für Schritt durch testgetriebene Entwicklung: erst die kleine Money-Example-Iteration, dann die xUnit-bezogenen Muster und später die Test- und Design-Pattern, die TDD im Alltag erst praktikabel machen.

## Key Takeaways & Detailed Notes

### 1. Das erste TDD-Beispiel (Money Example)
- Das erste Beispiel ist sehr **deskriptiv**: jeder kleine Schritt wird ausformuliert, warum ein Test fehlschlägt, was minimale Implementierung passiert und wann umrefaktoriert wird.
- Genau diese Langsamkeit macht es zum besten Einstieg — man sieht den Red-Green-Refactor-Zyklus im Zeitlupe-Tempo.
- Kerngedanke: erst das Verhalten spezifizieren, dann die kleinste mögliche Implementierung, dann unter grünem Test aufräumen.

### 2. Das xUnit-Beispiel
- Das **xUnit-Beispiel** fand ich besonders interessant: hier wird das Framework selbst (assertions, setUp/tearDown, Testcase-Lebenszyklus) testgetrieben gebaut.
- Zeigt, dass TDD auch für Infrastruktur-Code funktioniert, nicht nur für fachliche Logik.
- Löst das Chicken-and-Egg-Gefühl ("wer testet mein Testframework?") über klare, minimal gehaltene Schnittstellen.

### 3. Design-Patterns im Kontext von TDD
- Die späteren Kapitel behandeln **interessante Design-Patterns rund um TDD** (z. B. Command, Factory, Null Object, Template-Method-artige Strukturen), wie sie aus dem Refactoring unter grünem Test natürlich entstehen.
- Message First / Fixture Setup: erst die Nachricht zwischen Objekten klären, dann die Datenstruktur.
- Patterns sind hier kein Selbstzweck, sondern Konsequenz aus "das Verhalten bleibt grün, die Struktur wird lesbare gemacht".

### 4. Praktische Test-Patterns
- **Test List:** die Liste möglicher Tests vorab skizzieren, aber immer nur einen gleichzeitig erledigen.
- **Fake Me / triangulieren:** erst mit konkreten Beispielen verallgemeinern, nicht vorher abstrahieren.
- Refactoring nur unter grünem Test, Tests als Sicherheitsnetz für Verhaltensänderungen.

## Favorite Quote
> "Test-Driven Development is a way of managing fear during programming. Fear that if you make a change, something else will break; fear that you are not sure your program is correct."

## Personal Review & Verdict
**4/5 ★**: Gutes Buch. Das erste TDD-Beispiel ist sehr deskriptiv und der beste Einstieg, das xUnit-Beispiel ist wirklich spannend, und die späteren Kapitel erklären schöne Design-Patterns rund um TDD. Kleinster Kritikpunkt: die Detailtiefe zieht sich an Stellen etwas, weshalb es nicht das 5/5-Buch für mich ist.
