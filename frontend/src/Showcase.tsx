import { useState } from "react";

import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Modal from "./components/ui/Modal";
import Toast from "./components/ui/Toast";
import Loader from "./components/ui/Loader";

function Showcase() {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Component Showcase</h1>

      <h2>Buttons</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button disabled>Disabled</Button>
      </div>

      <h2>Input</h2>
      <Input
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Modal</h2>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Demo Modal"
      >
        <p>This is a reusable modal component.</p>
      </Modal>

      <h2>Toast</h2>
      <Button onClick={() => setShowToast(true)}>Show Toast</Button>

      {showToast && (
        <Toast
          message="This is a toast notification!"
          type="success"
        />
      )}

      <h2>Loader</h2>
      <Loader />
    </div>
  );
}

export default Showcase;