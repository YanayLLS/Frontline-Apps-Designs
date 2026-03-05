import { X, FileText, Video, File } from 'lucide-react';
import { useFavorites, FavoriteItem } from '../contexts/FavoritesContext';
import { useProject } from '../contexts/ProjectContext';
import { useToast } from '../contexts/ToastContext';

interface FavoritesBarProps {
  onFavoriteClick: (item: FavoriteItem) => void;
}

function getIconForType(type: 'article' | 'video' | 'document' | 'procedure' | 'media') {
  switch (type) {
    case 'article':
      return <FileText size={16} />;
    case 'video':
      return <Video size={16} />;
    case 'document':
      return <File size={16} />;
    case 'procedure':
      return <FileText size={16} />;
    case 'media':
      return <Video size={16} />;
    default:
      return <FileText size={16} />;
  }
}

export function FavoritesBar({ onFavoriteClick }: FavoritesBarProps) {
  const { favorites, removeFavorite } = useFavorites();
  const { currentProject } = useProject();
  const { showToast } = useToast();

  // Filter favorites for current project
  const projectFavorites = currentProject
    ? favorites.filter((fav) => fav.projectId === currentProject.id)
    : [];

  // Don't render if no favorites
  if (projectFavorites.length === 0) {
    return null;
  }

  return (
    <div 
      className="w-full px-4 py-2 flex items-center gap-2 overflow-x-auto custom-scrollbar"
      style={{ 
        fontFamily: 'var(--font-family)'
      }}
    >
      <div className="flex items-center flex-nowrap gap-2">
        {projectFavorites.map((item) => (
          <div
            key={item.id}
            className="group flex items-center gap-2 px-3 py-1.5 bg-secondary hover:bg-secondary/80 rounded-[var(--radius)] transition-all duration-200 border border-border shrink-0"
          >
            <button
              onClick={() => onFavoriteClick(item)}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              style={{ fontSize: 'var(--text-sm)' }}
            >
              <span className="text-muted group-hover:text-primary transition-colors">
                {getIconForType(item.type)}
              </span>
              <span className="max-w-[150px] truncate">{item.name}</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeFavorite(item.id);
                showToast(`Removed "${item.name}" from favorites`);
              }}
              className="text-muted hover:text-destructive transition-colors p-0.5 rounded hover:bg-destructive/10"
              title="Remove from favorites"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
