# The React Native "God-Level" Curriculum

6 Surgical Projects to Master the Framework (3 Days per Project)

---

## Project 1: The Biometric Vault

**The Goal:** Security, Hardware APIs, and Glassmorphism.

* **The Feature:** A notes app that is invisible until authenticated via FaceID/Fingerprint.
* **The "God" Level:**
  * Implement `expo-local-authentication`.
  * Use `expo-secure-store` for encrypted data persistence.
  * Create a "Glassmorphism" UI using `BlurView`.
* **Key Skill:** Security & Local Hardware Auth.

---

## Project 2: The Shared-Element Music Player

**The Goal:** Gesture-based animations and Layout Morphs.

* **The Feature:** A player where the album art morphs into the background or header as you scroll.
* **The "God" Level:**
  * Master `react-native-reanimated` (v3).
  * Implement **Shared Element Transitions**.
  * Map UI colors dynamically to album art using `react-native-image-colors`.
* **Key Skill:** 60FPS UI Performance & Fluid UX.

---

## Project 3: The "Ghost" Offline Chat

**The Goal:** Data Sync and Optimistic UI.

* **The Feature:** A chat interface that works perfectly without internet.
* **The "God" Level:**
  * Use **TanStack Query** for optimistic updates (message sends visually before the server responds).
  * Implement **WatermelonDB** or **SQLite** for heavy local persistence.
  * Sync logic: Automatically push "pending" messages when the network status changes.
* **Key Skill:** Offline-first Architecture.

---

## Project 4: The Skia Drawing Canvas

**The Goal:** Hardware-accelerated graphics.

* **The Feature:** A high-performance drawing board with brush physics.
* **The "God" Level:**
  * Use **@shopify/react-native-skia** for rendering.
  * Implement an Undo/Redo stack using the **Command Pattern**.
  * Snapshot the canvas to a file and share it via `react-native-share`.
* **Key Skill:** High-end Canvas Rendering.

---

## Project 5: The "Infinite" Deep-Linker

**The Goal:** List Optimization and Routing.

* **The Feature:** A high-speed explorer for a massive dataset (Unsplash/PokeAPI).
* **The "God" Level:**
  * Replace `FlatList` with **Shopify's FlashList** for zero-lag 10k+ item scrolling.
  * Configure **Deep Linking** (Open specific app screens from a browser URL).
  * Custom Skeleton screens that match layout dimensions perfectly.
* **Key Skill:** Scalability & Deep Navigation.

---

## Project 6: The Native Bridge Dashboard (Hell Level)

**The Goal:** Writing Swift/Kotlin Native Modules.

* **The Feature:** A dashboard showing low-level hardware data not found in Expo.
* **The "God" Level:**
  * Write a **Native Module** in **Swift** (iOS) and **Kotlin** (Android).
  * Access low-level battery cycle counts or advanced gyroscope frequencies.
  * Bridge the data to the JS side using an Event Emitter.
* **Key Skill:** Native/Javascript Interoperability.

---

## The 3-Day Sprint Schedule

| Day | Focus |
| :--- | :--- |
| **Day 1** | Project Init, Data Modeling, & Core UI Shell |
| **Day 2** | The "Hell" Logic (Animations, Native Bridges, or DB Sync) |
| **Day 3** | UI Polish, Error States, and Performance Profiling |
