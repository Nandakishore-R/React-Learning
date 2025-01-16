import React, { useState } from "react";
import FieldEditor from "./FieldEditor";
import FormPreview from "./FormPreview";
const fieldTypes = [
    { type: "text", label: "Text Input" },
    { type: "textarea", label: "Text Area" },
    // { type: "select", label: "Dropdown" },
    // { type: "checkbox", label: "Checkbox" },
];

function FormBuilder(){
    const [fields, setFields] = useState([]);
    const [selectedField, setSelectedField] = useState(null);

    const addField = (type) => {
        const newField = {
             type,
             id:  Date.now(),
             label: `Field ${fields.length + 1}`,
             options: type=== "select" ? ["Option 1", "Option 2"] : [],
        };
        setFields([...fields, newField]);    
    };
    const updateField = (id, updatedField) => {
        setFields(fields.map((field) => (field.id === id ? updatedField : field)));
    };
    const deleteField = (id) => {
        setFields(fields.filter((field) => field.id !== id));
        if (selectedField?.id === id) setSelectedField(null);
      };
      return (
        <div className="form-builder">
          <div className="sidebar">
            <h2>Add Fields</h2>
            {fieldTypes.map((fieldType) => (
              <button
                key={fieldType.type}
                onClick={() => addField(fieldType.type)}
              >
                {fieldType.label}
              </button>
            ))}
          </div>
          <div className="main">
            <FormPreview
              fields={fields}
              onSelectField={(field) => setSelectedField(field)}
              onDeleteField={deleteField}
            />
            {selectedField && (
              <FieldEditor
                field={selectedField}
                onUpdateField={(updatedField) =>
                  updateField(selectedField.id, updatedField)
                }
                
              />
            )}
          </div>
        </div>
    );
}
    
    export default FormBuilder;
