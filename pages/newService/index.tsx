import { NextPage } from "next";
import NewServiceForm from "../../components/templates/forms/newService";


const NewService: NextPage = () => {
    return (
        <div className="container mx-auto w-8/12">
            <NewServiceForm/>
        </div>
    )
}

export default NewService