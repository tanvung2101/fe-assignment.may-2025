// App.js
import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import FormRenderer from './JsonForm';
import { resetFormData } from './formSlice';

const AppContent = () => {
  const dispatch = useDispatch();
  const [jsonSchema, setJsonSchema] = useState(`{
    "name": { "type": "string", "title": "Tên" },
    "address": { "type": "string", "format": "vietnamese-address", "title": "Địa chỉ" }
  }`);

  let schemaObj = {};
  try {
    schemaObj = JSON.parse(jsonSchema);
  } catch (err) {
    console.error('Lỗi JSON Schema');
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">JSON Form Renderer</h1>

      <textarea
        className="w-full border p-2 rounded mb-4"
        rows="4"
        value={jsonSchema}
        onChange={(e) => setJsonSchema(e.target.value)}
      />

      <FormRenderer schema={schemaObj} />

      <button
        onClick={() => dispatch(resetFormData())}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Reset Form
      </button>
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
