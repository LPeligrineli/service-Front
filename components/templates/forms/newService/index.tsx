import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { geoApi, api } from '../../../../pages/api/api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Istate {
    name: string
}

const NewServiceForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [states, setStates] = useState<Istate[]>([])

    const onSubmit = (data: any) => {
        const requestData = {
            name: data.name,
            email: data.email,
            service: data.service,
            serviceDate: data.serviceDate,
            serviceTime: data.serviceTime,
            description: data.description,
            address: data.address,
            city: data.city,
            state: data.state,
        }
        api.post('services', requestData)
            .then(response => {
                toast.success('Serviço criado com sucesso')
            })
            .catch(error => {
                console.log(error)
                console.log(requestData)
            })
    }

    useEffect(() => {
        geoApi.get('')
            .then(response => {
                response.data.geonames.map((state: any) => {
                    setStates((prev) => [...prev, { name: state.name }])
                }
                )
            })
            .catch(error => {
                console.log(error)
            }
            )
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mb-20'>
            <h1 className="text-2xl font-bold text-left font-secondary underline my-4">Novo Serviço</h1>
            <div className="flex flex-col space-y-4">
                <div className='grid grid-cols-2 gap-4'>
                    <div className="input-wrapper">
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" {...register("name", { required: true })} />
                        {errors.name && <span className="text-red-500">Campo Obrigatório</span>}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500">Campo Obrigatório</span>}
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <div className="input-wrapper">
                        <label htmlFor="service">Serviço</label>
                        <select id="service" {...register("service", { required: true })}>
                            <option value="eletrico">Elétrico</option>
                            <option value="hidraulico">Hidráulico</option>
                            <option value="pintura">Pintura</option>
                            <option value="alvenaria">Alvenaria</option>
                        </select>
                        {errors.service && <span className="text-red-500">Campo Obrigatório</span>}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="date">Data</label>
                        <input className={errors.data && 'border-red-500'} type="date" id="serviceDate" {...register("serviceDate", { required: true })} />
                        {errors.date && <span className="text-red-500">Campo Obrigatório</span>}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="time">Hora</label>
                        <input type="time" id="serviceTime" {...register("serviceTime", { required: true })} />
                        {errors.time && <span className="text-red-500">Campo Obrigatório</span>}
                    </div>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Descrição</label>
                    <textarea id="description" {...register("description", { required: true })} />
                    {errors.description && <span className="text-red-500">Campo Obrigatório</span>}
                </div>
                <div className="input-wrapper">
                    <label htmlFor="address">Endereço</label>
                    <input type="text" id="address" {...register("address", { required: true })} />
                    {errors.address && <span className="text-red-500">Campo Obrigatório</span>}
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <div className="input-wrapper">
                        <label htmlFor="service">Estado</label>
                        <select id="state" {...register("state", { required: true })}>
                            {states.map((state, index) => (
                                <option key={index} value={state.name}>{state.name}</option>
                            ))}
                        </select>
                        {errors.service && <span className="text-red-500">Campo Obrigatório</span>}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="city">Cidade</label>
                        <input type="text" id="city" {...register("city", { required: true })} />
                        {errors.city && <span className="text-red-500">Campo Obrigatório</span>}
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <button type="submit" className="primary-button">Enviar</button>
                <ToastContainer />
            </div>
        </form>
    )
}

export default NewServiceForm