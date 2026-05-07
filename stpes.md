1. Scope (The "No" Phase)
Action: List 3 core features you will build and 3 you won't.

Memory Hook: Draw a line in the sand.

Senior Signal: Prevents you from running out of time on small details.

1. Schema (The "Brain" Phase)
Action: Define the shape of your data (JSON) and your Global State.

Memory Hook: Data before UI.

Senior Signal: If the data structure is solid, the UI builds itself.

1. Anatomy (The "Skeleton" Phase)
Action: Sketch the component tree or service architecture. Identify which part is the "Brain" (Logic) and which is the "Skin" (View).

Memory Hook: Map the boxes.

Senior Signal: Avoids "Prop Drilling" and messy component files.

1. Functions (The "Contract" Phase)
Action: Write the function signatures or Hook interfaces before the logic.

Example: const useAuth = () => { login, logout, user };

Memory Hook: Define the inputs and outputs.

Senior Signal: Ensures your logic is modular and testable.

1. Errors (The "Sad Path" Phase)
Action: Explicitly plan for Loading, Empty, and Failure states.

Memory Hook: How does it break?

Senior Signal: This is what separates "Coding" from "Engineering."
