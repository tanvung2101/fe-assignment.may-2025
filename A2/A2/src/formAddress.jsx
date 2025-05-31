// VietnameseAddress.js
import React, { useState, useEffect } from 'react';

const addressData = {
  'Hồ Chí Minh': ['Quận 1', 'Quận 2', 'Quận 3'],
  'Hà Nội': ['Ba Đình', 'Hoàn Kiếm', 'Cầu Giấy'],
  'Đà Nẵng': ['Hải Châu', 'Sơn Trà', 'Ngũ Hành Sơn'],
};

export const VietnameseAddress = ({ value, onChange }) => {
  const [province, setProvince] = useState('');
  const [ward, setWard] = useState('');
  const [street, setStreet] = useState('');

  useEffect(() => {
    const addressString = [province, ward, street].filter(Boolean).join(', ');
    if (value !== addressString) {
      onChange(addressString);
    }
  }, [province, ward, street]);

  useEffect(() => {
    // Reset ward khi province thay đổi
    setWard('');
  }, [province]);

  return (
    <div className="flex flex-col gap-2 p-2 border rounded">
      <label className="text-sm">Địa chỉ</label>
      <select
        className="border p-1 rounded"
        value={province}
        onChange={(e) => setProvince(e.target.value)}
      >
        <option value="">Chọn Tỉnh / Thành phố</option>
        {Object.keys(addressData).map((prov) => (
          <option key={prov} value={prov}>{prov}</option>
        ))}
      </select>

      <select
        className="border p-1 rounded"
        value={ward}
        onChange={(e) => setWard(e.target.value)}
        disabled={!province}
      >
        <option value="">Chọn Phường / Xã</option>
        {province &&
          addressData[province].map((ward) => (
            <option key={ward} value={ward}>{ward}</option>
          ))}
      </select>

      <input
        type="text"
        placeholder="Đường và số nhà"
        className="border p-1 rounded"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
    </div>
  );
};
