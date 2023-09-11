import React from 'react';
import type { IRenderNode } from '../index';
interface IProps {
    renderConditionNode: (params: IRenderNode) => React.ReactNode;
}
declare const BranchNode: React.FC<IProps>;
export default BranchNode;
