import React from "react";

const Question = () => {
  return (
    <section className="py-4 bg-white mt-10 mb-4 h-56 flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-start justify-center flex-col">
          <h2 className="font-openSans text-3xl font-bold text-primary-brand-color mb-2">İşletme sahibi misiniz?</h2>
          <p className="font-openSans text-hero font-semibold">
            Getir işletme iş ortaklarından biri olun, işinizi daha az
            maliyetle büyütün, müşteri memnuniyetini artırın.
          </p>
        </div>
        <div className="flex items-center justify-center px-8 py-3 bg-brand-yellow rounded-md">
          <a href="#" className="button font-openSans text-sm font-semibold text-primary-brand-color">
            Hemen Başvur
          </a>
        </div>
      </div>
    </section>
  );
};

export default Question;
