import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseName, chooseSex, chooseDob, chooseDod, chooseDams_sire, chooseSire, chooseDams} from "../redux/slices/RootSlice"

interface CamFormProps {
  id?: string[]
}

const CamForm = ( props:CamFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 401);
      event.target.reset()
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseSex(data.sex));
      dispatch(chooseDob(data.dob));
      dispatch(chooseDod(data.dod));
      dispatch(chooseDams_sire(data.dams_sire));
      dispatch(chooseSire(data.sire));
      dispatch(chooseDams(data.dams)); 
      

      server_calls.create(store.getState())
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name"></label>
          <Input {...register('name')} name='name' placeholder="Name" />
        </div>
        <div>
          <label htmlFor="sex"></label>
          <Input {...register('sex')} name='sex' placeholder="Sex" />
        </div>
        <div>
          <label htmlFor="dob"></label>
          <Input {...register('dob')} name='dob' placeholder="Date of Birth" />
        </div>
        <div>
          <label htmlFor="dod"></label>
          <Input {...register('dod')} name='dod' placeholder="Date of Death" />
        </div>
        <div>
          <label htmlFor="dams_sire"></label>
          <Input {...register('dams_sire')} name='dams_sire' placeholder="Dams Sire" />
        </div>
        <div>
          <label htmlFor="sire"></label>
          <Input {...register('sire')} name='sire' placeholder="Sire" />
        </div>
        <div>
          <label htmlFor="dams"></label>
          <Input {...register('dams')} name='dams' placeholder="Dams" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CamForm