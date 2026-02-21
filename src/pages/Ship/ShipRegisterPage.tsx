import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const shipTypes = ['컨테이너선', '벌크선', '유조선', 'LNG선', 'LPG선', '자동차운반선'];

const ShipRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '', imoNumber: '', type: '컨테이너선', flag: '대한민국',
    grossTonnage: '', deadweight: '', buildYear: '', builder: '',
    classificationSociety: '', captain: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('선박이 등록되었습니다. (Mock)');
    navigate('/ships');
  };

  return (
    <div>
      <PageHeader
        title="선박 등록"
        subtitle="새로운 선박 정보를 입력합니다"
        actions={
          <button className="btn-secondary flex items-center gap-2" onClick={() => navigate('/ships')}>
            <ArrowLeft size={18} /> 목록
          </button>
        }
      />
      <form onSubmit={handleSubmit} className="card max-w-3xl">
        <h3 className="card-header">선박 기본 정보</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: '선박명', name: 'name', type: 'text', required: true },
            { label: 'IMO 번호', name: 'imoNumber', type: 'text', required: true },
            { label: '국적', name: 'flag', type: 'text' },
            { label: '총톤수 (GT)', name: 'grossTonnage', type: 'number' },
            { label: '재화중량톤 (DWT)', name: 'deadweight', type: 'number' },
            { label: '건조년도', name: 'buildYear', type: 'number' },
            { label: '건조소', name: 'builder', type: 'text' },
            { label: '선급', name: 'classificationSociety', type: 'text' },
            { label: '선장', name: 'captain', type: 'text' },
          ].map(field => (
            <div key={field.name}>
              <label className="block text-sm text-navy-300 mb-1">{field.label}</label>
              <input
                name={field.name}
                type={field.type}
                value={(form as any)[field.name]}
                onChange={handleChange}
                required={field.required}
                className="input-field"
              />
            </div>
          ))}
          <div>
            <label className="block text-sm text-navy-300 mb-1">선종</label>
            <select name="type" value={form.type} onChange={handleChange} className="select-field">
              {shipTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button type="button" className="btn-secondary" onClick={() => navigate('/ships')}>취소</button>
          <button type="submit" className="btn-primary flex items-center gap-2"><Save size={18} /> 등록</button>
        </div>
      </form>
    </div>
  );
};

export default ShipRegisterPage;
