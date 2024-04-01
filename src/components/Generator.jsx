import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import {SCHEMES, WORKOUTS} from '../utils/swoldier'
import Button from './Button'

function Header(props) {
    const {index, title, description} = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-auto mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator(props) {
    const[showModal, setShowModal] = useState(false)
    const {poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout} = props
    function toggleModal() {
        setShowModal(!showModal)
    }

    function updateMuscles(muscleGroup) {
        if(muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }
        if(muscles.length > 2) {
            return
        }
        if(poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }
        if(muscles.length===2) {
            setShowModal(false) 
        }
        setMuscles([...muscles, muscleGroup])
    }

  return (
    <SectionWrapper id={'generate'} header={"Generate Your Workout"} title={['It\'s', 'Huge', 'o\'clock']}>

        <Header index={'01'} title={'Pick Your Poison'} description={'Select the workout you wish to endure.'}/>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
            {Object.keys(WORKOUTS).map((type, typeIndex) => {
                return(
                    <button onClick={() => {
                        setPoison(type)
                        setMuscles([])
                    }} className={'border  duration-200 px-4 hover:border-blue-600 hover:bg-slate-800 py-3 rounded-lg ' + (type === poison ? ' bg-slate-800 border-blue-600' : ' border-blue-400 bg-slate-950')} key={typeIndex}>
                    <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                    </button>
                )
            })}
        </div>

        <Header index={'02'} title={'Lock on Targets'} description={'Select the muscles judged for annihilation.'}/>
        <div className='bg-slate-950 p-3 border border-solid border-blue-400 rounded-lg flex flex-col'>
            <button onClick={toggleModal} className='relative flex items-center justify-center'>
                <p className='capitalize'>{muscles.length === 0 ? 'Select Muscle Groups' : muscles.join(' ')}</p>
                <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
            </button>
            {showModal && (
                <div className='flex flex-col px-3 pb-3'>
                    {(poison==='individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                        return(
                            <button onClick={() => {
                                updateMuscles(muscleGroup)
                            }} className={'capitalize hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')} key={muscleGroupIndex}> 
                                <p>{muscleGroup.replaceAll('_', ' ')}</p>
                            </button>
                        )
                    })}
                </div>
            )}
        </div>

        <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective.'}/>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                return(
                    <button onClick={() => {
                        setGoal(scheme)
                    }} className={'border  duration-200 px-4 hover:border-blue-600 hover:bg-slate-800 py-3 rounded-lg ' + (scheme === goal ? ' border-blue-600 bg-slate-800' : ' border-blue-400 bg-slate-950')} key={schemeIndex}>
                    <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                    </button>
                )
            })} 
        </div>
        <Button func={updateWorkout} text= {'Formulate'}></Button>
    </SectionWrapper>

    
  )
}