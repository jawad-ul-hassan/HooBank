import { clients } from '../constants';
import styles from '../style';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter}  p-6`}>
      <div className={`${styles.flexCenter} flex-wrap w-full gap-6`}>
        {clients.map(client => {
          return (
            <div
              key={client.id}
              className={`flex-1 ${styles.flexCenter} sm:min-w-[192px]  min-w-[100px]`}
            >
              <img
                src={client.logo}
                alt="client"
                className="sm:w-[192px]  w-[100px] object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
