import { AgentQueries } from '../../../../apis';
import { SelectedRepsirShopById, selectRepairshopById } from './select';

const AgentItem = () => {
  const { data, isLoading, error } =
    AgentQueries.useRepairShopByIdQuery<SelectedRepsirShopById>(
      { repairShopId: 417 },
      {
        select: selectRepairshopById,
      },
    );

  if (data === undefined || isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h2>{data.name}</h2>
      <p>{data.address}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
        {data.serviceBadges.map((sb) => (
          <button
            key={sb.id}
            style={{
              width: 50,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
            }}
          >
            <img src={sb.icon_img} width={40} height={40} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default AgentItem;