export type ItemType = 'digital-twin' | 'procedure' | 'media' | 'folder';
export type MediaType = 'video' | 'image' | 'document';

export type ActivityAction = 
  | 'created' 
  | 'updated' 
  | 'deleted' 
  | 'published' 
  | 'unpublished'
  | 'connected'
  | 'disconnected'
  | 'renamed'
  | 'moved'
  | 'shared';

export type ActivityCategory = 
  | 'knowledge-base'
  | 'digital-twin'
  | 'procedure'
  | 'session'
  | 'settings'
  | 'user';

export interface ActivityLog {
  id: string;
  timestamp: string;
  user: string;
  action: ActivityAction;
  category: ActivityCategory;
  itemName: string;
  itemType?: ItemType;
  details?: string;
  metadata?: {
    from?: string;
    to?: string;
    itemId?: string;
    relatedItemId?: string;
    relatedItemName?: string;
  };
}

export interface KnowledgeBaseItem {
  id: string;
  name: string;
  type: ItemType;
  mediaType?: MediaType;
  createdBy: string;
  createdDate: string;
  lastEditedBy: string;
  lastEdited: string;
  connectedDigitalTwinIds?: string[]; // Array of connected digital twin IDs for procedures
  digitalTwinId?: string; // For items of type 'digital-twin', this references the actual DigitalTwin ID
  children?: KnowledgeBaseItem[];
  isExpanded?: boolean;
  thumbnail?: string;
  description?: string;
  isPublished?: boolean;
  hasUnpublishedChanges?: boolean;
  publishedVersion?: string;
  publishedDate?: string;
  parentId?: string;
}
