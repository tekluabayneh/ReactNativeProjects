## Project 1: The Biometric Vault, combined The "Offline-First" Sync Engine

**The Goal:** Security, Hardware APIs, and Glassmorphism. local db or offlin handling ablity

- **The Feature:** A notes app that is invisible until authenticated via FaceID/Fingerprint. The Concept: A simple task or note manager that uses a local database (like SQLite or WatermelonDB).
- **The "God" Level:**
  - Implement `expo-local-authentication`.
  - Implement Search Bar with Debouncing.
  - Use `expo-secure-store` for encrypted data persistence.
  - Create a "Glassmorphism" UI using `BlurView`.
  - Optimistic UI: When the user adds a note, it appears instantly on the screen before the server even knows about it.
  - Instead of just fetching data, build a system that works perfectly in a tunnel with no Wi-Fi.
  - Sync Logic: Implementing a "Retry Queue." If the network is down, the app stores the API calls and "drains" the queue once the connection returns.
  - Conflict Resolution: What happens if the local data and server data are different?
- **Key Skill:** Security & Local Hardware Auth.

Why it's advanced: You'll learn how to manage NetInfo and how to architect a data layer that doesn't rely on a constant internet connection.

## steps to follow when solving practical coding enterview

- define or architect data
- define projecct style like headless style (headless means your logic and ui are seprated and tey get hooked easly later on, smooth UI)
- always think about sad and happy path whenever buliding or architect projecct or data fllow
- only build UI after console shows correct logic log start buliding UI

  ## main Logics to follow

  - services => login like api call just pure ts and js Db quires othertimes
  - hooks => logic everything for one specific problem for example (auth flow, updating sessions)
  - types.ts => The Data Architecture
  - components/(UI) => "Skin" (UI Folder)

  ## core feture to taken care of

- must have fetures
  - Offline-First // done
  - Debouncing Search
  - Glassmorphism UI // done
  - auth with FaceID/Fingerprint // done
  - sync data when network comes/stable / done

- optional fetures
  - Conflict Resolution

  ## the Data structure

  - is it json dumb data or string like or api call
    - we choose to use Dumb data json

  ## map out what the user do

  - user should be able to search for note
  - user should be >> >> CRUD opration on note
  - user should >> >> >> authenticate via FaceID or Fingerprint

  ## map out the system requirment

  - for notes we tends to create the data so we kind have to use json
  - we should be able to store the data in local SQLite storage and handle sync when data is stable
  - and also offline login is must do (if net is down)
