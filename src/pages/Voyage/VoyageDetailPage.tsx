import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Ship, MapPin, Package, Fuel, Navigation } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import StatusBadge from '../../components/common/StatusBadge';
import { mockVoyages } from '../../data/voyages';
import { formatDate, formatNumber } from '../../utils/format';

const VoyageDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const voyage = mockVoyages.find(v => v.id === id);

  if (!voyage) {
    return <div className="card text-center py-12"><p className="text-navy-400">운항 정보를 찾을 수 없습니다.</p></div>;
  }

  return (
    <div>
      <PageHeader
        title={voyage.voyageNumber}
        subtitle={`${voyage.shipName} | ${voyage.departurePort.name} → ${voyage.arrivalPort.name}`}
        actions={<Link to="/voyages" className="btn-secondary flex items-center gap-2"><ArrowLeft size={18} /> 목록</Link>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card flex items-center gap-4">
          <div className="bg-maritime-blue/20 p-3 rounded-lg"><Ship className="text-maritime-blue" size={24} /></div>
          <div><p className="text-navy-300 text-sm">선박</p><p className="text-foreground font-medium">{voyage.shipName}</p></div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="bg-green-500/20 p-3 rounded-lg"><Package className="text-green-400" size={24} /></div>
          <div><p className="text-navy-300 text-sm">화물</p><p className="text-foreground font-medium">{voyage.cargoType}</p></div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="bg-cyan-500/20 p-3 rounded-lg"><Navigation className="text-maritime-accent" size={24} /></div>
          <div><p className="text-navy-300 text-sm">항해거리</p><p className="text-foreground font-medium">{formatNumber(voyage.distance)} NM</p></div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="bg-yellow-500/20 p-3 rounded-lg"><Fuel className="text-yellow-400" size={24} /></div>
          <div><p className="text-navy-300 text-sm">연료 소비</p><p className="text-foreground font-medium">{formatNumber(voyage.fuelConsumption)} MT</p></div>
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="card-header">진행 현황</h3>
        <div className="flex items-center justify-between mb-2">
          <StatusBadge status={voyage.status} />
          <span className="text-sm text-navy-300">{voyage.progress}%</span>
        </div>
        <div className="w-full h-3 bg-navy-700 rounded-full">
          <div className="h-full bg-maritime-blue rounded-full transition-all" style={{ width: `${voyage.progress}%` }} />
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-green-400" />
            <div>
              <p className="text-sm text-navy-300">출발</p>
              <p className="text-foreground">{voyage.departurePort.name}</p>
              <p className="text-xs text-navy-400">{formatDate(voyage.departureDate)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-right">
            <div>
              <p className="text-sm text-navy-300">도착</p>
              <p className="text-foreground">{voyage.arrivalPort.name}</p>
              <p className="text-xs text-navy-400">{formatDate(voyage.estimatedArrival)}</p>
              {voyage.actualArrival && <p className="text-xs text-maritime-light">실제: {formatDate(voyage.actualArrival)}</p>}
            </div>
            <MapPin size={16} className="text-red-400" />
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="card-header">운항 상세 정보</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {[
            ['항차번호', voyage.voyageNumber],
            ['선박', voyage.shipName],
            ['출발항', `${voyage.departurePort.name} (${voyage.departurePort.country})`],
            ['도착항', `${voyage.arrivalPort.name} (${voyage.arrivalPort.country})`],
            ['출발일', formatDate(voyage.departureDate)],
            ['예상도착일', formatDate(voyage.estimatedArrival)],
            ['실제도착일', voyage.actualArrival ? formatDate(voyage.actualArrival) : '-'],
            ['화물 종류', voyage.cargoType],
            ['화물량', `${formatNumber(voyage.cargoWeight)} MT`],
            ['항해거리', `${formatNumber(voyage.distance)} NM`],
            ['연료 소비', `${formatNumber(voyage.fuelConsumption)} MT`],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between py-2 border-b border-navy-700">
              <span className="text-navy-300">{label}</span>
              <span className="text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoyageDetailPage;
