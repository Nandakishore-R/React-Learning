import React, { useState, useEffect } from "react";

function FieldEditor({ field, onUpdateField, newfun }) {
  const [fieldData, setFieldData] = useState(field);
  // Synchronize fieldData with the field prop when it changes
  useEffect(() => {
    setFieldData(field);
  }, [field]);

  const updateField = (key, value) => {
    const updatedField = { ...fieldData, [key]: value };
    setFieldData(updatedField);
    onUpdateField(updatedField);
    // newfun(updatedField);
  };

  return (
    <div className="field-editor">
      <h2>Edit Field</h2>
      <label>
        Label:
        <input
          type="text"
          value={fieldData.label}
          onChange={(e) => updateField("label", e.target.value)}
        />
      </label>
      {["text", "textarea"].includes(fieldData.type) && (
        <label>
          Placeholder:
          <input
            type="text"
            value={fieldData.placeholder || ""}
            onChange={(e) => updateField("placeholder", e.target.value)}
          />
        </label>
      )}
      {fieldData.type === "select" && (
        <div>
          <label>Options:</label>
          {fieldData.options.map((option, index) => (
            <div key={index}>
              <input
                type="text"
                value={option}
                onChange={(e) => {
                  const newOptions = [...fieldData.options];
                  newOptions[index] = e.target.value;
                  updateField("options", newOptions);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  const newOptions = fieldData.options.filter((_, i) => i !== index);
                  updateField("options", newOptions);
                }}
                style={{ color: "red" }}
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => updateField("options", [...fieldData.options, ""])}
          >
            Add Option
          </button>
        </div>
      )}    
    </div>
  );
}

export default FieldEditor;
