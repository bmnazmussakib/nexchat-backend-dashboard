'use client'
import React, { useState } from 'react';
import { Stepper } from './Stepper';
import { StepConfiguration } from './StepConfiguration';
import { StepUpload } from './StepUpload';
import { StepCreateAgent } from './StepCreateAgent';
import { StepPlayground } from './StepPlayground';
import { AgentConfig, AppStep, DEFAULT_CONFIG } from '@/utils/types';

export default function App() {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.Configuration);
  const [config, setConfig] = useState<AgentConfig>(DEFAULT_CONFIG);

  const updateConfig = (updates: Partial<AgentConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (currentStep < AppStep.Playground) {
      setCurrentStep(prev => (prev + 1) as AppStep);
    }
  };

  const backStep = () => {
    if (currentStep < AppStep.Playground) {
      setCurrentStep(prev => (prev - 1) as AppStep);
    }
  };



  const renderStep = () => {
    switch (currentStep) {
      case AppStep.Configuration:
        return <StepConfiguration config={config} updateConfig={updateConfig} onNext={nextStep} />;
      case AppStep.UploadFile:
        return <StepUpload config={config} updateConfig={updateConfig} onNext={nextStep} onBack={backStep} />;
      case AppStep.CreateAgent:
        return <StepCreateAgent config={config} updateConfig={updateConfig} onNext={nextStep} onBack={backStep} />;
      case AppStep.Playground:
        return <StepPlayground config={config} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Stepper currentStep={currentStep} />
      <main className="pb-20">
        {renderStep()}
      </main>
    </div>
  );
}