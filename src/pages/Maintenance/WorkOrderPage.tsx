import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import { mockShips } from '../../data/ships';

const maintenanceTypes = ['정기점검', '긴급수리', '부품교체', '도크입거', '검사'];
const priorities = ['긴급', '높음', '보통', '낮음'];

const WorkOrderPage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    shipId: '', title: '', description: '', type: '정기점검',
    priority: '보통', assignedTo: '', scheduledDate: '', estimatedCost: '', parts: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('작업지시서가 등록되었습니다. (Mock)');
    navigate('/maintenance');
  };

  return (
    <div>
      <PageHeader
        title="작업지시서 작성"
        subtitle="정비 작업지시서를 작성합니다"
        actions={
          <button className="btn-secondary flex items-center gap-2" onClick={() => navigate('/maintenance')}>
            <ArrowLeft size={18} /> 목록
          </button>
        }
      />
      <form onSubmit={handleSubmit} className="card max-w-3xl">
        <h3 className="card-header">작업 정보</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-navy-300 mb-1">대상 선박</label>
            <select name="shipId" value={form.shipId} onChange={handleChange} required className="select-field">
              <option value="">선박 선택</option>
              {mockShips.map(s => <option key={s.id} value={s.id}>{s.name} ({s.type})</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-navy-300 mb-1">작업 유형</label>
            <select name="type" value={form.type} onChange={handleChange} className="select-field">
              {maintenanceTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-navy-300 mb-1">작업명</label>
            <input name="title" value={form.title} onChange={handleChange} required className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-navy-300 mb-1">우선순위</label>
            <select name="priority" value={form.priority} onChange={handleChange} className="select-field">
              {priorities.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-navy-300 mb-1">담당자</label>
            <input name="assignedTo" value={form.assignedTo} onChange={handleChange} required className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-navy-300 mb-1">예정일</label>
            <input name="scheduledDate" type="date" value={form.scheduledDate} onChange={handleChange} required className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-navy-300 mb-1">예상 비용 (원)</label>
            <input name="estimatedCost" type="number" value={form.estimatedCost} onChange={handleChange} className="input-field" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-navy-300 mb-1">작업 설명</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows={4} className="input-field resize-none" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-navy-300 mb-1">소요 부품 (쉼표로 구분)</label>
            <input name="parts" value={form.parts} onChange={handleChange} placeholder="예: 피스톤링, 실린더라이너" className="input-field" />
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button type="button" className="btn-secondary" onClick={() => navigate('/maintenance')}>취소</button>
          <button type="submit" className="btn-primary flex items-center gap-2"><Save size={18} /> 등록</button>
        </div>
      </form>
    </div>
  );
};

export default WorkOrderPage;
