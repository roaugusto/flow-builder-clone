import type { INode, HistoryType } from '../index';
declare const useHistory: () => {
    maxLength: number;
    pushHistory: (record?: INode[]) => void;
    history: (type: HistoryType) => void;
};
export default useHistory;
