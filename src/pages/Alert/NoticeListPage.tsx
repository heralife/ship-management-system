import React, { useState } from 'react';
import { Pin, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import SearchInput from '../../components/common/SearchInput';
import { useSearch } from '../../hooks/useSearch';
import { mockNotices } from '../../data/alerts';
import { Notice } from '../../types/alert';
import { formatRelativeTime, formatNumber } from '../../utils/format';

const NoticeListPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  const searched = useSearch<Notice>(mockNotices, ['title', 'content', 'author', 'category'], query);
  const pinned = searched.filter(n => n.isPinned);
  const regular = searched.filter(n => !n.isPinned);

  const renderNotice = (notice: Notice) => (
    <div
      key={notice.id}
      className={`card cursor-pointer transition-colors ${notice.isPinned ? 'border-l-4 border-l-yellow-400' : ''}`}
      onClick={() => setExpanded(expanded === notice.id ? null : notice.id)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {notice.isPinned && <Pin size={16} className="text-yellow-400" />}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">{notice.title}</span>
              <span className="badge-info">{notice.category}</span>
            </div>
            <p className="text-xs text-navy-400 mt-1">
              {notice.author} · {formatRelativeTime(notice.createdAt)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-navy-400 text-sm">
            <Eye size={14} />
            <span>{formatNumber(notice.viewCount)}</span>
          </div>
          {expanded === notice.id ? <ChevronUp size={18} className="text-navy-400" /> : <ChevronDown size={18} className="text-navy-400" />}
        </div>
      </div>
      {expanded === notice.id && (
        <div className="mt-4 pt-4 border-t border-navy-700">
          <p className="text-sm text-navy-200 leading-relaxed whitespace-pre-line">{notice.content}</p>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <PageHeader title="공지사항" subtitle="사내 공지 및 안내" />
      <div className="mb-4 max-w-md">
        <SearchInput value={query} onChange={setQuery} placeholder="제목, 내용, 작성자 검색..." />
      </div>

      {pinned.length > 0 && (
        <div className="space-y-3 mb-6">
          {pinned.map(renderNotice)}
        </div>
      )}

      <div className="space-y-3">
        {regular.length === 0 && pinned.length === 0 ? (
          <div className="card text-center py-12"><p className="text-navy-400">공지사항이 없습니다.</p></div>
        ) : (
          regular.map(renderNotice)
        )}
      </div>
    </div>
  );
};

export default NoticeListPage;
