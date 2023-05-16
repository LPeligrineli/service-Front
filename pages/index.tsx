import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { api } from './api/api';
import Card from '../components/ui/Card';
import Divider from '../components/ui/Divider';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IService } from '../models/service.model';

const Home: NextPage = () => {
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    api.get('services').then(response => {
      const updatedServices = response.data.map((service: IService) => ({
        ...service,
        hasLiked: service.hasLiked || false,
      }));
      setServices(updatedServices);
    });
  }, []);

  const handleLike = (id: number, status: boolean) => {
    const updatedServices = services.map(service => {
      if (service.id === id) {
        return {
          ...service,
          hasLiked: status,
        };
      }
      return service;
    });
    setServices(updatedServices);
  };

  return (
    <div className="container mx-auto">
      {!services.length ? (
        <p className="text-xl font-bold text-center mt-4">
          Você não teve nenhum Serviço realizado recentemente!
        </p>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center font-secondary mt-4">
            Como podemos Ajudá-lo hoje?
          </h2>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {services.map(service => (
              <Card key={service.id}>
                <p className="capitalize text-2xl font-bold text-left font-secondary">
                  {service.service}
                </p>
                <p className="text-xl font-bold text-left my-4">{service.description}</p>
                <Divider />
                <div className="flex justify-between">
                  <p className="text-md text-left my-4">Data: {service.serviceDate}</p>
                  <p className="text-md text-left my-4">Hora: {service.serviceTime}</p>
                </div>
                <div>
                  {service.hasLiked ? (
                    <AiFillHeart
                      className="text-2xl text-red-500 cursor-pointer"
                      onClick={() => handleLike(service.id, false)}
                    />
                  ) : (
                    <AiOutlineHeart
                      className="text-2xl cursor-pointer"
                      onClick={() => handleLike(service.id, true)}
                    />
                  )}
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
