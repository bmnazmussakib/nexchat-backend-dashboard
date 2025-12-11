'use client'
import React, { useState } from 'react'
import { highlightTextWithGradient } from './ui/highlightTextWithGradient'
import Link from 'next/link'
import { WelcomeStep } from './WelcomeStep'
import { StepConfiguration } from './StepConfiguration'
import { AgentConfig, DEFAULT_CONFIG } from '@/utils/types'

type Props = {}

type ModalStep = 'welcome' | 'configuration'

function DashboardHero({ }: Props) {
  const [step, setStep] = useState<ModalStep>('welcome')
  const [config, setConfig] = useState<AgentConfig>(DEFAULT_CONFIG)

  const updateConfig = (updates: Partial<AgentConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }))
  }

  const handleWelcomeNext = (name: string) => {
    // You might want to store the name somewhere if needed, 
    // for now just proceed to next step
    console.log('User name:', name)
    setStep('configuration')
  }

  const handleConfigSave = () => {
    // Handle save logic here
    console.log('Config saved:', config)
    // Close modal or show success
    const modal = document.getElementById('my_modal_3') as HTMLDialogElement
    modal?.close()
  }

  const resetModal = () => {
    setStep('welcome')
    setConfig(DEFAULT_CONFIG)
  }

  return (
    <>
      <div className="card bg-gradient-to-l from-[#FFDEC1] from-[0%] to-[#FBD7FF] to-[100%] w-full shadow-sm rounded-3xl">
        <div className="card-body lg:p-10 md:p-8 p-6">
          <h2 className="card-title text-black md:text-[32px] sm:text-2xl text-lg font-grandis">
            {
              highlightTextWithGradient('Welcome to NexChat AI🎉 ', 'NexChat AI')
            }
          </h2>
          <p className="font-grandis md:text-lg text-sm">You are probably new to our platform.</p>
          <p className="font-grandis md:text-lg text-sm">We recommend starting with our
            <span className="bg-gradient-to-r from-[#f55823] to-[#ff9f00] bg-clip-text text-transparent relative before:absolute before:w-full before:h-[1px] before:left-0 before:-bottom-0.5 before:transition-all before:duration-200 before:bg-[linear-gradient(90deg,#f55823_0%,#ff9f00_100%)]"><Link href={'/onboarding'}> onboarding</Link> </span> for a step-by-step guide on how to create your first AI Agent.</p>
          <div className="card-actions justify-start mt-7">
            <button
              className="btn bg-white border-white shadow-none rounded-full capitalize text-black font-grandis md:text-lg text-sm font-medium md:h-12 px-6"
              // onClick={() => {
              //   resetModal()
              //   const modal = document.getElementById('my_modal_3') as HTMLDialogElement
              //   modal?.showModal()
              // }}
            >
              open onboarding
            </button>

            <dialog id="my_modal_3" className="modal">
              <div className="modal-box max-w-4xl p-0 bg-transparent shadow-none overflow-visible">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-50 bg-white shadow-md">✕</button>
                </form>

                {step === 'welcome' && (
                  <WelcomeStep onNext={handleWelcomeNext} />
                )}

                {step === 'configuration' && (
                  <StepConfiguration
                    config={config}
                    updateConfig={updateConfig}
                    onNext={handleConfigSave}
                  />
                )}
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardHero