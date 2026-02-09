'use client';

import { useState } from 'react';
import { 
  Upload, CheckCircle, Clock, AlertCircle,
  FileText, Camera, Shield, ChevronRight
} from 'lucide-react';

type KYCStatus = 'not_started' | 'pending' | 'approved' | 'rejected';

export default function KYCPage() {
  const [status, setStatus] = useState<KYCStatus>('not_started');
  const [step, setStep] = useState(1);
  const [documents, setDocuments] = useState({
    idFront: null as File | null,
    idBack: null as File | null,
    proofOfAddress: null as File | null,
    selfie: null as File | null,
  });

  const handleFileChange = (field: keyof typeof documents) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocuments({ ...documents, [field]: e.target.files[0] });
    }
  };

  const handleSubmit = () => {
    setStatus('pending');
  };

  if (status === 'approved') {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="card p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-emerald-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Verification Complete</h1>
          <p className="text-gray-400 mb-6">
            Your identity has been verified. You now have full access to all platform features.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 text-emerald-400">
            <Shield size={16} className="mr-2" /> Verified Account
          </div>
        </div>
      </div>
    );
  }

  if (status === 'pending') {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="card p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-amber-900/30 flex items-center justify-center mx-auto mb-6">
            <Clock size={40} className="text-amber-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Verification In Progress</h1>
          <p className="text-gray-400 mb-6">
            We're reviewing your documents. This usually takes 24-48 hours. We'll notify you once completed.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-900/30 text-amber-400">
            <Clock size={16} className="mr-2" /> Under Review
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Identity Verification (KYC)</h1>
        <p className="text-gray-400">Complete verification to unlock full platform features and higher investment limits.</p>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
              step >= s ? 'gradient-primary text-white' : 'bg-emerald-900/30 text-gray-400'
            }`}>
              {step > s ? <CheckCircle size={20} /> : s}
            </div>
            {s < 3 && (
              <div className={`w-16 h-1 mx-2 rounded ${
                step > s ? 'bg-emerald-500' : 'bg-emerald-900/30'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: ID Document */}
      {step === 1 && (
        <div className="card p-6 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <FileText size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Government-Issued ID</h2>
              <p className="text-gray-400 text-sm">Upload front and back of your ID</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Front of ID</label>
              <label className="block border-2 border-dashed border-emerald-900/50 rounded-lg p-8 text-center cursor-pointer hover:border-emerald-700/50 transition">
                <input type="file" accept="image/*" className="hidden" onChange={handleFileChange('idFront')} />
                {documents.idFront ? (
                  <div className="text-emerald-400">
                    <CheckCircle size={32} className="mx-auto mb-2" />
                    <p className="text-sm">{documents.idFront.name}</p>
                  </div>
                ) : (
                  <>
                    <Upload size={32} className="mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-400 text-sm">Click to upload</p>
                  </>
                )}
              </label>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Back of ID</label>
              <label className="block border-2 border-dashed border-emerald-900/50 rounded-lg p-8 text-center cursor-pointer hover:border-emerald-700/50 transition">
                <input type="file" accept="image/*" className="hidden" onChange={handleFileChange('idBack')} />
                {documents.idBack ? (
                  <div className="text-emerald-400">
                    <CheckCircle size={32} className="mx-auto mb-2" />
                    <p className="text-sm">{documents.idBack.name}</p>
                  </div>
                ) : (
                  <>
                    <Upload size={32} className="mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-400 text-sm">Click to upload</p>
                  </>
                )}
              </label>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-emerald-900/20 border border-emerald-900/30">
            <h4 className="text-white font-medium mb-2">Accepted Documents:</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Passport</li>
              <li>• Driver's License</li>
              <li>• National ID Card</li>
            </ul>
          </div>

          <button
            onClick={() => setStep(2)}
            disabled={!documents.idFront || !documents.idBack}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
          >
            Continue <ChevronRight size={18} />
          </button>
        </div>
      )}

      {/* Step 2: Proof of Address */}
      {step === 2 && (
        <div className="card p-6 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <FileText size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Proof of Address</h2>
              <p className="text-gray-400 text-sm">Document must be dated within last 3 months</p>
            </div>
          </div>

          <label className="block border-2 border-dashed border-emerald-900/50 rounded-lg p-12 text-center cursor-pointer hover:border-emerald-700/50 transition">
            <input type="file" accept="image/*,.pdf" className="hidden" onChange={handleFileChange('proofOfAddress')} />
            {documents.proofOfAddress ? (
              <div className="text-emerald-400">
                <CheckCircle size={48} className="mx-auto mb-2" />
                <p>{documents.proofOfAddress.name}</p>
              </div>
            ) : (
              <>
                <Upload size={48} className="mx-auto mb-2 text-gray-400" />
                <p className="text-gray-400">Click to upload proof of address</p>
              </>
            )}
          </label>

          <div className="p-4 rounded-lg bg-emerald-900/20 border border-emerald-900/30">
            <h4 className="text-white font-medium mb-2">Accepted Documents:</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Utility bill (electricity, water, gas)</li>
              <li>• Bank statement</li>
              <li>• Government-issued letter</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <button onClick={() => setStep(1)} className="btn-secondary flex-1">Back</button>
            <button
              onClick={() => setStep(3)}
              disabled={!documents.proofOfAddress}
              className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              Continue <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Selfie */}
      {step === 3 && (
        <div className="card p-6 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <Camera size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Selfie Verification</h2>
              <p className="text-gray-400 text-sm">Take a photo holding your ID next to your face</p>
            </div>
          </div>

          <label className="block border-2 border-dashed border-emerald-900/50 rounded-lg p-12 text-center cursor-pointer hover:border-emerald-700/50 transition">
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange('selfie')} />
            {documents.selfie ? (
              <div className="text-emerald-400">
                <CheckCircle size={48} className="mx-auto mb-2" />
                <p>{documents.selfie.name}</p>
              </div>
            ) : (
              <>
                <Camera size={48} className="mx-auto mb-2 text-gray-400" />
                <p className="text-gray-400">Click to upload selfie with ID</p>
              </>
            )}
          </label>

          <div className="p-4 rounded-lg bg-amber-900/20 border border-amber-900/30">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-amber-400 font-medium mb-1">Photo Requirements:</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Your face and ID must be clearly visible</li>
                  <li>• Good lighting, no shadows</li>
                  <li>• ID text must be readable</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button onClick={() => setStep(2)} className="btn-secondary flex-1">Back</button>
            <button
              onClick={handleSubmit}
              disabled={!documents.selfie}
              className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              Submit for Verification <CheckCircle size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
