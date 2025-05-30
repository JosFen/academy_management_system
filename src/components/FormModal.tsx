'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faTrashAlt,
  faEdit,
  faPlus
} from '@fortawesome/free-solid-svg-icons'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
  deleteClass,
  deleteExam,
  deleteStudent,
  deleteSubject,
  deleteTeacher
} from '@/lib/formActions'
import { FormContainerProps } from './forms/FormContainer'
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const deleteActionMap = {
  subject: deleteSubject,
  class: deleteClass,
  teacher: deleteTeacher,
  student: deleteStudent,
  exam: deleteExam,
  // OTHER DELETE ACTIONS
  parent: deleteSubject,
  lesson: deleteSubject,
  assignment: deleteSubject,
  result: deleteSubject,
  attendance: deleteSubject,
  event: deleteSubject,
  announcement: deleteSubject
}

// USE LAZY LOADING

// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";

const TeacherForm = dynamic(() => import('./forms/TeacherForm'), {
  loading: () => <h1>Loading...</h1>
})
const StudentForm = dynamic(() => import('./forms/StudentForm'), {
  loading: () => <h1>Loading...</h1>
})
const SubjectForm = dynamic(() => import('./forms/SubjectForm'), {
  loading: () => <h1>Loading...</h1>
})
// const ClassForm = dynamic(() => import("./forms/ClassForm"), {
//   loading: () => <h1>Loading...</h1>,
// });
// const ExamForm = dynamic(() => import("./forms/ExamForm"), {
//   loading: () => <h1>Loading...</h1>,
// });

const forms: {
  [key: string]: (
    setOpen: Dispatch<SetStateAction<boolean>>,
    type: 'create' | 'update',
    data?: any,
    relatedData?: any
  ) => JSX.Element
} = {
  subject: (setOpen, type, data, relatedData) => (
    <SubjectForm
      type={type}
      data={data}
      setOpen={setOpen}
      relatedData={relatedData}
    />
  ),
  teacher: (setOpen, type, data, relatedData) => (
    <TeacherForm
      type={type}
      data={data}
      setOpen={setOpen}
      relatedData={relatedData}
    />
  ),
  student: (setOpen, type, data, relatedData) => (
    <StudentForm
      type={type}
      data={data}
      setOpen={setOpen}
      relatedData={relatedData}
    />
  )
  // OTHER LIST ITEMS:
}

const FormModal = ({
  table,
  type,
  data,
  id,
  relatedData
}: FormContainerProps & { relatedData?: any }) => {
  const icon =
    type === 'delete' ? faTrashAlt : type === 'update' ? faEdit : faPlus
  // TAILWIND DYNAMIC CLASS:
  // https://tailwindcss.com/docs/detecting-classes-in-source-files#using-regular-expressions
  const bgColor =
    type === 'create'
      ? 'bg-yellow-400 hover:bg-yellow-600'
      : type === 'update'
        ? 'bg-green-400 hover:bg-green-600'
        : 'bg-red-400 hover:bg-red-600'

  const [open, setOpen] = useState(false)

  const Form = () => {
    const [state, formAction] = useFormState(deleteActionMap[table], {
      success: false,
      error: false
    })

    const router = useRouter()

    useEffect(() => {
      if (state.success) {
        toast(`${table} has been deleted!`)
        setOpen(false)
        router.refresh()
      }
    }, [state, router])

    return type === 'delete' && id ? (
      <form action={formAction} className="p-4 flex flex-col gap-4">
        <input type="text | number" name="id" value={id} hidden />
        <span className="text-center font-medium">
          Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === 'create' || type === 'update' ? (
      forms[table](setOpen, type, data, relatedData)
    ) : (
      'Form not found!'
    )
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`w-7 h-7 flex items-center justify-center rounded-full text-white ${bgColor} focus:outline-none `}
      >
        <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md max-h-[90vh] relative overflow-y-auto  w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FormModal
