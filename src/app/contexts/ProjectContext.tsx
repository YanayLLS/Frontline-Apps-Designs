import { createContext, useContext, useState, ReactNode } from 'react';
// Multi-project management context with isolated data per project

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
  connectedDigitalTwinIds?: string[];
  digitalTwinId?: string;
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

export interface DigitalTwin {
  id: string;
  name: string;
  description?: string;
  preview3DUrl?: string;
  createdBy: string;
  createdDate: string;
  lastEditedBy: string;
  lastEdited: string;
}

export interface Owner {
  id: string;
  name: string;
  initials: string;
  color: string;
}

export interface SharedMember {
  id: string;
  name: string;
  initials?: string;
  color?: string;
  type: 'user' | 'group';
  memberCount?: number;
}

export interface ProjectSettings {
  owners: Owner[];
  description: string;
  privacy: 'private' | 'public' | 'workspace';
  sharedWith: SharedMember[];
  defaultDigitalTwin: string;
  createdDate: string;
}

export interface ProjectData {
  id: string;
  name: string;
  digitalTwins: DigitalTwin[];
  knowledgeBaseItems: KnowledgeBaseItem[];
  activityLogs: ActivityLog[];
  settings: ProjectSettings;
}

interface ProjectContextType {
  projects: ProjectData[];
  currentProject: ProjectData | null;
  setCurrentProject: (projectId: string) => void;
  createProject: (projectData: Omit<ProjectData, 'id' | 'digitalTwins' | 'knowledgeBaseItems' | 'activityLogs'>) => string;
  updateProject: (projectId: string, updates: Partial<ProjectData>) => void;
  deleteProject: (projectId: string) => void;
  
  // Current project helpers
  digitalTwins: DigitalTwin[];
  knowledgeBaseItems: KnowledgeBaseItem[];
  activityLogs: ActivityLog[];
  getDigitalTwinById: (id: string) => DigitalTwin | undefined;
  getDigitalTwinByName: (name: string) => DigitalTwin | undefined;
  getConnectedProcedures: (digitalTwinId: string) => KnowledgeBaseItem[];
  updateKnowledgeBaseItems: (items: KnowledgeBaseItem[]) => void;
  addKnowledgeBaseItem: (item: KnowledgeBaseItem) => void;
  updateKnowledgeBaseItem: (id: string, updates: Partial<KnowledgeBaseItem>) => void;
  deleteKnowledgeBaseItem: (id: string) => void;
  addActivityLog: (log: Omit<ActivityLog, 'id' | 'timestamp'>) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Ensure context is properly initialized

// Helper function to generate project-specific data
function generateDefaultProjectData(projectName: string, projectId: string): ProjectData {
  const projectTypes = [
    {
      name: 'Elitebook 840 G9',
      digitalTwins: [
        {
          id: `${projectId}-dt-1`,
          name: 'Elitebook 840 G9 - Main Unit',
          description: 'High-performance business laptop with premium build quality',
          createdBy: 'Alex Johnson',
          createdDate: '2024-01-15',
          lastEditedBy: 'Alex Johnson',
          lastEdited: '2024-02-10',
        },
        {
          id: `${projectId}-dt-2`,
          name: 'Battery Pack - 56Wh',
          description: 'Lithium-ion battery with fast charging capability',
          createdBy: 'Maria Smith',
          createdDate: '2024-01-20',
          lastEditedBy: 'Maria Smith',
          lastEdited: '2024-02-05',
        },
      ],
      knowledgeBase: [
        {
          id: `${projectId}-kb-1`,
          name: 'Hardware Components',
          type: 'folder' as ItemType,
          createdBy: 'Alex Johnson',
          createdDate: '2024-01-15',
          lastEditedBy: 'Alex Johnson',
          lastEdited: '2024-02-10',
          isExpanded: true,
          children: [
            {
              id: `${projectId}-kb-1-1`,
              name: 'Elitebook 840 G9 - Main Unit',
              type: 'digital-twin' as ItemType,
              digitalTwinId: `${projectId}-dt-1`,
              createdBy: 'Alex Johnson',
              createdDate: '2024-01-15',
              lastEditedBy: 'Alex Johnson',
              lastEdited: '2024-02-10',
              parentId: `${projectId}-kb-1`,
              thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
              description: 'High-performance business laptop',
            },
            {
              id: `${projectId}-kb-1-2`,
              name: 'Battery Replacement Guide',
              type: 'procedure' as ItemType,
              connectedDigitalTwinIds: [`${projectId}-dt-1`, `${projectId}-dt-2`],
              createdBy: 'Maria Smith',
              createdDate: '2024-01-20',
              lastEditedBy: 'Maria Smith',
              lastEdited: '2024-02-05',
              description: 'Step-by-step guide for replacing the battery pack',
              isPublished: true,
              publishedVersion: '1.2',
              publishedDate: '2024-02-05',
              parentId: `${projectId}-kb-1`,
            },
          ],
        },
        {
          id: `${projectId}-kb-2`,
          name: 'Maintenance Procedures',
          type: 'folder' as ItemType,
          createdBy: 'David Brown',
          createdDate: '2024-01-18',
          lastEditedBy: 'David Brown',
          lastEdited: '2024-02-08',
          children: [
            {
              id: `${projectId}-kb-2-1`,
              name: 'Monthly Inspection Checklist',
              type: 'procedure' as ItemType,
              connectedDigitalTwinIds: [`${projectId}-dt-1`],
              createdBy: 'David Brown',
              createdDate: '2024-01-18',
              lastEditedBy: 'David Brown',
              lastEdited: '2024-02-08',
              description: 'Regular inspection procedure for Elitebook devices',
              isPublished: true,
              publishedVersion: '1.0',
              publishedDate: '2024-02-08',
              parentId: `${projectId}-kb-2`,
            },
          ],
        },
      ],
    },
    {
      name: 'Manufacturing Facility Alpha',
      digitalTwins: [
        {
          id: `${projectId}-dt-1`,
          name: 'CNC Machine Model X500',
          description: 'High-precision CNC milling machine for metal fabrication',
          createdBy: 'John Davis',
          createdDate: '2023-10-03',
          lastEditedBy: 'Mike Wilson',
          lastEdited: '2023-10-27',
        },
        {
          id: `${projectId}-dt-2`,
          name: 'Assembly Line Robot AR-2000',
          description: 'Automated assembly robot with 6-axis movement',
          createdBy: 'Michael Smith',
          createdDate: '2023-10-08',
          lastEditedBy: 'Lisa Anderson',
          lastEdited: '2023-11-01',
        },
      ],
      knowledgeBase: [
        {
          id: `${projectId}-kb-1`,
          name: 'Manufacturing Equipment',
          type: 'folder' as ItemType,
          createdBy: 'Sarah Chen',
          createdDate: '2023-10-01',
          lastEditedBy: 'Sarah Chen',
          lastEdited: '2023-10-25',
          isExpanded: true,
          children: [
            {
              id: `${projectId}-kb-1-1`,
              name: 'CNC Machine Model X500',
              type: 'digital-twin' as ItemType,
              digitalTwinId: `${projectId}-dt-1`,
              createdBy: 'John Davis',
              createdDate: '2023-10-03',
              lastEditedBy: 'Mike Wilson',
              lastEdited: '2023-10-27',
              parentId: `${projectId}-kb-1`,
              thumbnail: 'https://images.unsplash.com/photo-1764115424737-25aca6f47835?w=400',
              description: 'High-precision CNC milling machine',
            },
            {
              id: `${projectId}-kb-1-2`,
              name: 'Maintenance Procedure - X500',
              type: 'procedure' as ItemType,
              connectedDigitalTwinIds: [`${projectId}-dt-1`],
              createdBy: 'Emily Carter',
              createdDate: '2023-10-05',
              lastEditedBy: 'Emily Carter',
              lastEdited: '2023-10-28',
              description: 'Regular maintenance procedure for the CNC Machine',
              isPublished: true,
              publishedVersion: '1.5',
              publishedDate: '2023-10-28',
              parentId: `${projectId}-kb-1`,
            },
          ],
        },
      ],
    },
    {
      name: 'ProBook 450 G10',
      digitalTwins: [
        {
          id: `${projectId}-dt-1`,
          name: 'ProBook 450 G10 - Base Model',
          description: 'Versatile business laptop for everyday productivity',
          createdBy: 'Sarah Wilson',
          createdDate: '2024-02-01',
          lastEditedBy: 'Sarah Wilson',
          lastEdited: '2024-02-12',
        },
      ],
      knowledgeBase: [
        {
          id: `${projectId}-kb-1`,
          name: 'Product Documentation',
          type: 'folder' as ItemType,
          createdBy: 'Sarah Wilson',
          createdDate: '2024-02-01',
          lastEditedBy: 'Sarah Wilson',
          lastEdited: '2024-02-12',
          isExpanded: true,
          children: [
            {
              id: `${projectId}-kb-1-1`,
              name: 'ProBook 450 G10 - Base Model',
              type: 'digital-twin' as ItemType,
              digitalTwinId: `${projectId}-dt-1`,
              createdBy: 'Sarah Wilson',
              createdDate: '2024-02-01',
              lastEditedBy: 'Sarah Wilson',
              lastEdited: '2024-02-12',
              parentId: `${projectId}-kb-1`,
              thumbnail: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400',
              description: 'Versatile business laptop',
            },
          ],
        },
      ],
    },
    {
      name: 'ZBook Studio G9',
      digitalTwins: [
        {
          id: `${projectId}-dt-1`,
          name: 'ZBook Studio G9 - Workstation',
          description: 'Professional mobile workstation for creative workflows',
          createdBy: 'Tom Harris',
          createdDate: '2024-01-10',
          lastEditedBy: 'Tom Harris',
          lastEdited: '2024-02-15',
        },
      ],
      knowledgeBase: [
        {
          id: `${projectId}-kb-1`,
          name: 'Technical Specifications',
          type: 'folder' as ItemType,
          createdBy: 'Tom Harris',
          createdDate: '2024-01-10',
          lastEditedBy: 'Tom Harris',
          lastEdited: '2024-02-15',
          children: [
            {
              id: `${projectId}-kb-1-1`,
              name: 'ZBook Studio G9 - Workstation',
              type: 'digital-twin' as ItemType,
              digitalTwinId: `${projectId}-dt-1`,
              createdBy: 'Tom Harris',
              createdDate: '2024-01-10',
              lastEditedBy: 'Tom Harris',
              lastEdited: '2024-02-15',
              parentId: `${projectId}-kb-1`,
              thumbnail: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400',
              description: 'Professional mobile workstation',
            },
          ],
        },
      ],
    },
  ];

  // Find matching project type or use default
  const projectType = projectTypes.find(p => p.name === projectName) || projectTypes[1];

  return {
    id: projectId,
    name: projectName,
    digitalTwins: projectType.digitalTwins,
    knowledgeBaseItems: projectType.knowledgeBase,
    activityLogs: [],
    settings: {
      owners: [
        { id: '1', name: 'Alex Johnson', initials: 'AJ', color: '#71edaa' }
      ],
      description: `Project for ${projectName}`,
      privacy: 'private',
      sharedWith: [],
      defaultDigitalTwin: projectType.digitalTwins[0]?.name || '',
      createdDate: new Date().toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      }),
    },
  };
}

// Create 4 default projects
const DEFAULT_PROJECTS: ProjectData[] = [
  generateDefaultProjectData('Elitebook 840 G9', 'project-1'),
  generateDefaultProjectData('Manufacturing Facility Alpha', 'project-2'),
  generateDefaultProjectData('ProBook 450 G10', 'project-3'),
  generateDefaultProjectData('ZBook Studio G9', 'project-4'),
];

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<ProjectData[]>(DEFAULT_PROJECTS);
  const [currentProjectId, setCurrentProjectId] = useState<string>(DEFAULT_PROJECTS[0].id);

  const currentProject = projects.find(p => p.id === currentProjectId) || null;

  const setCurrentProject = (projectId: string) => {
    setCurrentProjectId(projectId);
  };

  const createProject = (projectData: Omit<ProjectData, 'id' | 'digitalTwins' | 'knowledgeBaseItems' | 'activityLogs'>): string => {
    const newProjectId = `project-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newProject: ProjectData = {
      id: newProjectId,
      name: projectData.name,
      digitalTwins: [],
      knowledgeBaseItems: [],
      activityLogs: [],
      settings: projectData.settings,
    };
    setProjects(prev => [...prev, newProject]);
    setCurrentProjectId(newProjectId);
    return newProjectId;
  };

  const updateProject = (projectId: string, updates: Partial<ProjectData>) => {
    setProjects(prev =>
      prev.map(project =>
        project.id === projectId ? { ...project, ...updates } : project
      )
    );
  };

  const deleteProject = (projectId: string) => {
    setProjects(prev => prev.filter(p => p.id !== projectId));
    // If deleting current project, switch to first available project
    if (currentProjectId === projectId) {
      const remainingProjects = projects.filter(p => p.id !== projectId);
      if (remainingProjects.length > 0) {
        setCurrentProjectId(remainingProjects[0].id);
      }
    }
  };

  // Current project helpers
  const digitalTwins = currentProject?.digitalTwins || [];
  const knowledgeBaseItems = currentProject?.knowledgeBaseItems || [];
  const activityLogs = currentProject?.activityLogs || [];

  const getDigitalTwinById = (id: string) => {
    return digitalTwins.find(dt => dt.id === id);
  };

  const getDigitalTwinByName = (name: string) => {
    return digitalTwins.find(dt => dt.name === name);
  };

  const getConnectedProcedures = (digitalTwinId: string): KnowledgeBaseItem[] => {
    const flattenItems = (items: KnowledgeBaseItem[]): KnowledgeBaseItem[] => {
      let result: KnowledgeBaseItem[] = [];
      items.forEach(item => {
        result.push(item);
        if (item.children) {
          result = result.concat(flattenItems(item.children));
        }
      });
      return result;
    };
    
    const allItems = flattenItems(knowledgeBaseItems);
    return allItems.filter(item => 
      item.type === 'procedure' && 
      item.connectedDigitalTwinIds && 
      item.connectedDigitalTwinIds.includes(digitalTwinId)
    );
  };

  const updateKnowledgeBaseItems = (items: KnowledgeBaseItem[]) => {
    if (!currentProject) return;
    updateProject(currentProject.id, { knowledgeBaseItems: items });
  };

  const addKnowledgeBaseItem = (item: KnowledgeBaseItem) => {
    if (!currentProject) return;
    
    const newLog: ActivityLog = {
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      user: item.createdBy,
      action: 'created',
      category: item.type === 'procedure' ? 'procedure' : item.type === 'digital-twin' ? 'digital-twin' : 'knowledge-base',
      itemName: item.name,
      itemType: item.type,
      details: `Created new ${item.type.replace('-', ' ')}`,
      metadata: {
        itemId: item.id,
      }
    };
    
    updateProject(currentProject.id, {
      knowledgeBaseItems: [...currentProject.knowledgeBaseItems, item],
      activityLogs: [newLog, ...currentProject.activityLogs],
    });
  };

  const updateKnowledgeBaseItem = (id: string, updates: Partial<KnowledgeBaseItem>) => {
    if (!currentProject) return;

    const findItem = (items: KnowledgeBaseItem[]): KnowledgeBaseItem | undefined => {
      for (const item of items) {
        if (item.id === id) return item;
        if (item.children) {
          const found = findItem(item.children);
          if (found) return found;
        }
      }
      return undefined;
    };

    const updateItem = (items: KnowledgeBaseItem[]): KnowledgeBaseItem[] => {
      return items.map(item => {
        if (item.id === id) {
          return { ...item, ...updates };
        }
        if (item.children) {
          return { ...item, children: updateItem(item.children) };
        }
        return item;
      });
    };

    const originalItem = findItem(currentProject.knowledgeBaseItems);
    const newItems = updateItem(currentProject.knowledgeBaseItems);
    
    if (originalItem) {
      const currentUser = originalItem.lastEditedBy || 'Unknown User';
      let newLog: ActivityLog | null = null;
      
      if (updates.name && updates.name !== originalItem.name) {
        newLog = {
          id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          timestamp: new Date().toISOString(),
          user: currentUser,
          action: 'renamed',
          category: originalItem.type === 'procedure' ? 'procedure' : 'digital-twin',
          itemName: updates.name,
          itemType: originalItem.type,
          details: `Renamed from "${originalItem.name}"`,
          metadata: {
            itemId: id,
            from: originalItem.name,
            to: updates.name,
          }
        };
      } else if (updates.isPublished !== undefined && updates.isPublished !== originalItem.isPublished) {
        newLog = {
          id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          timestamp: new Date().toISOString(),
          user: currentUser,
          action: updates.isPublished ? 'published' : 'unpublished',
          category: 'procedure',
          itemName: originalItem.name,
          itemType: originalItem.type,
          details: updates.isPublished 
            ? `Published version ${updates.publishedVersion || 'unknown'}`
            : 'Unpublished for editing',
          metadata: {
            itemId: id,
            to: updates.publishedVersion,
          }
        };
      } else if (Object.keys(updates).some(key => key !== 'lastEdited' && key !== 'lastEditedBy')) {
        newLog = {
          id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          timestamp: new Date().toISOString(),
          user: currentUser,
          action: 'updated',
          category: originalItem.type === 'procedure' ? 'procedure' : 'digital-twin',
          itemName: originalItem.name,
          itemType: originalItem.type,
          details: updates.description ? 'Updated description and details' : 'Updated item details',
          metadata: {
            itemId: id,
          }
        };
      }

      updateProject(currentProject.id, {
        knowledgeBaseItems: newItems,
        activityLogs: newLog ? [newLog, ...currentProject.activityLogs] : currentProject.activityLogs,
      });
    } else {
      updateProject(currentProject.id, { knowledgeBaseItems: newItems });
    }
  };

  const deleteKnowledgeBaseItem = (id: string) => {
    if (!currentProject) return;

    const findAndRemove = (items: KnowledgeBaseItem[]): { items: KnowledgeBaseItem[], deletedItem?: KnowledgeBaseItem } => {
      let deletedItem: KnowledgeBaseItem | undefined;
      const newItems = items.filter(item => {
        if (item.id === id) {
          deletedItem = item;
          return false;
        }
        if (item.children) {
          const result = findAndRemove(item.children);
          item.children = result.items;
          if (result.deletedItem) {
            deletedItem = result.deletedItem;
          }
        }
        return true;
      });
      return { items: newItems, deletedItem };
    };

    const result = findAndRemove(currentProject.knowledgeBaseItems);
    
    if (result.deletedItem) {
      const newLog: ActivityLog = {
        id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date().toISOString(),
        user: result.deletedItem.lastEditedBy,
        action: 'deleted',
        category: result.deletedItem.type === 'procedure' ? 'procedure' : 'digital-twin',
        itemName: result.deletedItem.name,
        itemType: result.deletedItem.type,
        details: `Deleted ${result.deletedItem.type.replace('-', ' ')}`,
        metadata: {
          itemId: id,
        }
      };

      updateProject(currentProject.id, {
        knowledgeBaseItems: result.items,
        activityLogs: [newLog, ...currentProject.activityLogs],
      });
    }
  };

  const addActivityLog = (log: Omit<ActivityLog, 'id' | 'timestamp'>) => {
    if (!currentProject) return;

    const newLog: ActivityLog = {
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      ...log,
    };

    updateProject(currentProject.id, {
      activityLogs: [newLog, ...currentProject.activityLogs],
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        currentProject,
        setCurrentProject,
        createProject,
        updateProject,
        deleteProject,
        digitalTwins,
        knowledgeBaseItems,
        activityLogs,
        getDigitalTwinById,
        getDigitalTwinByName,
        getConnectedProcedures,
        updateKnowledgeBaseItems,
        addKnowledgeBaseItem,
        updateKnowledgeBaseItem,
        deleteKnowledgeBaseItem,
        addActivityLog,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
}
