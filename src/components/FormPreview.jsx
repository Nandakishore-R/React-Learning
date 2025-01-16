import React from "react";

function FormPreview({ fields, onSelectField, onDeleteField }) {
  return (
    <div className="form-preview">
      <h2>Form Preview</h2>
      <form>
        {fields.map((field) => (
          <div
            key={field.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
              cursor: "pointer",
            }}
            onClick={() => onSelectField(field)}
          >
            <label>{field.label}</label>
            {field.type === "text" && (
              <input type="text" placeholder={field.placeholder} disabled />
            )}
            {field.type === "textarea" && (
              <textarea placeholder={field.placeholder} disabled />
            )}
            {field.type === "select" && (
              <select disabled>
                {field.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {field.type === "checkbox" && (
              <div>
                <input type="checkbox" disabled />
                <span> {field.label}</span>
              </div>
            )}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteField(field.id);
              }}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </div>
        ))}
      </form>
    </div>
  );
}

export default FormPreview;
