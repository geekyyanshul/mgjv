import { Suspense } from 'react';
import {BookConsultationContent} from './BookConsultationContent';

export const metadata = {
  title: 'Book Consultation | MGYO',
  description: 'Book your consultation with MGYO',
};

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

export default function BookConsultationPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <BookConsultationContent />
    </Suspense>
  );
}