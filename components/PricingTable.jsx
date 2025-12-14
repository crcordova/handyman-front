'use client';

import { Check, Info } from 'lucide-react';
import { formatPrice } from '../lib/pricingData';

export function PricingTable({ serviceData }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-blue-300 transition-colors">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-blue-700 text-white p-6 text-center">
        <div className="text-5xl mb-3">{serviceData.icon}</div>
        <h3 className="text-3xl font-bold">{serviceData.service}</h3>
      </div>

      {/* Pricing Ranges */}
      <div className="p-6 space-y-4">
        {serviceData.ranges.map((range, index) => (
          <div 
            key={index}
            className="border-2 border-gray-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-gray-900 text-lg">
                    {range.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{range.description}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">
                  {formatPrice(range.pricePerHour)}
                </div>
                <div className="text-sm text-gray-500">por hora</div>
              </div>
            </div>
            
            {range.note && (
              <div className="mt-3 flex items-start gap-2 bg-blue-50 p-3 rounded-lg">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">{range.note}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-gray-50 p-4 text-center border-t">
        <p className="text-sm text-gray-600">
          * Los precios son referenciales y pueden variar según la complejidad del proyecto
        </p>
        <p className="text-sm text-gray-600">
          ** Los precios no incluyen materiales ni traslados
        </p>
      </div>
    </div>
  );
}