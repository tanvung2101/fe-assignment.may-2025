// JsonForm.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from './formSlice';
import { VietnameseAddress } from './VietnameseAddress';

const FormRenderer = ({ schema }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.data);

  const handleChange = (field, value) => {
    if (formData[field] !== value) {
      dispatch(setFormData({ ...formData, [field]: value }));
    }
  };

  return (
    <div className="space-y-4">
      {Object.keys(schema).map((field) => {
        const fieldSchema = schema[field];
        if (fieldSchema.type === 'string' && fieldSchema.format === 'vietnamese-address') {
          return (
            <VietnameseAddress
              key={field}
              value={formData[field] || ''}
              onChange={(val) => handleChange(field, val)}
            />
          );
        }
        return (
          <div key={field}>
            <label className="block text-sm">{fieldSchema.title}</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData[field] || ''}
              onChange={(e) => handleChange(field, e.target.value)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FormRenderer;
