import 'systemjs/dist/system.js';
import type { IRegisterNode, IRegisterRemoteNode, AbstractNodeType, INode } from '../index';
export declare const createUuid: (prefix?: string) => string;
export declare const getRegisterNode: (registerNodes: IRegisterNode[], type?: string) => IRegisterNode | undefined;
export declare const getIsStartNode: (registerNodes: IRegisterNode[], type?: string) => boolean | undefined;
export declare const getIsEndNode: (registerNodes: IRegisterNode[], type?: string) => boolean | undefined;
export declare const getIsLoopNode: (registerNodes: IRegisterNode[], type?: string) => boolean | undefined;
export declare const getIsConditionNode: (registerNodes: IRegisterNode[], type?: string) => boolean | undefined;
export declare const getIsBranchNode: (registerNodes: IRegisterNode[], type?: string) => boolean | undefined;
export declare const getAbstractNodeType: (registerNodes: IRegisterNode[], type?: string) => AbstractNodeType;
export declare const createNewNode: (registerNodes: IRegisterNode[], type?: string, customCreateUuid?: (prefix?: string) => string) => any;
export declare const DFS: (nodes: INode[], allNodes?: INode[]) => INode[];
export declare const buildFlatNodes: (params: {
    registerNodes: IRegisterNode[];
    nodes: INode[];
}) => {
    [key: string]: any;
    id: string;
    type: string;
    name: string;
    data?: any;
    path?: string[] | undefined;
    configuring?: boolean | undefined;
    validateStatusError?: boolean | undefined;
    next?: string[] | undefined;
}[];
export declare const buildTreeNodes: (params: {
    nodes: INode[];
}) => INode[];
export declare const computeNodesPath: (nodes: INode[]) => INode[];
declare global {
    interface Window {
        System: {
            import: (url: string) => any;
        };
    }
    interface Document {
        adoptedStyleSheets: any;
    }
}
export declare const loadRemoteNode: (params: IRegisterRemoteNode) => Promise<IRegisterNode>;
export declare const exchangeNodes: (nodes: any[], startIndex: number, endIndex: number) => void;
