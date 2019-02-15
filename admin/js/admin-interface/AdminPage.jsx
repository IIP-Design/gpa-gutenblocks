import SelectionPage from './SelectionPage';
import defaultBlocks from './utils/defaultBlocks.json';

const { blockType } = defaultBlocks;

const AdminPage = () => (
  <div className="iip-gut-admin-page">
    <h1>Configure Your IIP Gutenblocks</h1>
    { blockType.map( type => (
      <SelectionPage
        blockGroup={ type.blocks }
        groupName={ type.group }
      />
    ) ) }
  </div>
);

export default AdminPage;
