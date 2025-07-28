
import React from 'react';
import * as Icons from './constants';

// --- Reusable Components ---

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => (
  <section id={id} className={`py-16 sm:py-24 ${className}`}>
    <div className="container mx-auto px-4 max-w-6xl">
      {children}
    </div>
  </section>
);

interface SectionHeaderProps {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title, subtitle }) => (
  <div className="text-center mb-12">
    {icon && <div className="flex justify-center text-orange-500 mb-4">{icon}</div>}
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">{title}</h2>
    <p className="text-lg text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
  </div>
);

// --- Scroll Utility ---
const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

// --- Page Sections ---

const Header = () => (
  <header className="hero-gradient text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full opacity-50"></div>
    <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 rounded-full opacity-50"></div>
    
    <div className="relative container mx-auto px-4 py-24 md:py-32 text-center">
      <div className="flex justify-center items-center gap-4 mb-6">
        <Icons.PizzaIcon className="w-16 h-16"/>
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">Deprizza</h1>
      </div>
      <p className="text-xl md:text-2xl font-semibold mb-8">Pizzería & Brunch en el Corazón de Osorno</p>
      
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">✨ ¡Conviértete en dueño de Deprizza!</h2>
        <p className="text-lg">
          Traspaso de pizzería y cafetería en funcionamiento, con 3 años de operación continua, clientela habitual y excelente ubicación en el centro de Osorno.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
          <Icons.MapPinIcon className="mx-auto w-8 h-8 mb-2"/>
          <h3 className="font-bold">Ubicación Privilegiada</h3>
          <p className="text-sm">En pleno centro de Osorno, frente a la municipalidad</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
          <Icons.ClockIcon className="mx-auto w-8 h-8 mb-2"/>
          <h3 className="font-bold">Horarios Flexibles</h3>
          <p className="text-sm">07:30 a 16:30 hrs. Con opción de ampliar</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
          <Icons.UsersIcon className="mx-auto w-8 h-8 mb-2"/>
          <h3 className="font-bold">Clientela Fiel</h3>
          <p className="text-sm">Operando desde fines de 2022 con comunidad fidelizada</p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <button 
          onClick={() => handleScrollTo('contact')} 
          className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-green-500 hover:text-white hover:shadow-xl hover:shadow-green-500/40">
          Agendar Visita
        </button>
      </div>
    </div>
  </header>
);

const BusinessSummary = () => {
    const summaryItems = [
        { icon: <Icons.CalendarIcon className="w-8 h-8"/>, title: "Casi 3 años de operación continua", description: "Con reputación positiva en la comunidad", tag: "Desde 2022" },
        { icon: <Icons.MapPinIcon className="w-8 h-8"/>, title: "Ubicación estratégica", description: "Frente a la Municipalidad y zona de alto tránsito", tag: "Centro" },
        { icon: <Icons.ForkKnifeIcon className="w-8 h-8"/>, title: "Dos negocios en uno", description: "Pizzas al paso + desayunos y café de especialidad", tag: "2 en 1" },
        { icon: <Icons.TagIcon className="w-8 h-8"/>, title: "Marca posicionada y valorada", description: "Con presencia en redes y clientela habitual", tag: "13.7k followers" },
    ];
    return (
        <Section id="business-summary" className="bg-white">
            <SectionHeader 
                icon={<Icons.BriefcaseIcon className="w-12 h-12" />}
                title="Resumen del Negocio"
                subtitle="Deprizza es una pizzería & cafetería en operación desde fines de 2022, con posicionamiento local consolidado, flujo constante de clientes y retorno financiero atractivo."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {summaryItems.map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 text-center flex flex-col items-center shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="w-20 h-20 mb-5 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm flex-grow mb-4">{item.description}</p>
                        {item.tag && (
                            <div className="mt-auto px-4 py-1 text-sm font-semibold rounded-full border-2 border-orange-400 text-orange-600 bg-orange-50">
                                {item.tag}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
};

const Services = () => {
    const services = [
        { icon: <Icons.PizzaSliceIcon className="w-8 h-8"/>, title: "Pizzas al paso", description: "Especialidad de la casa con recetas únicas" },
        { icon: <Icons.SandwichIcon className="w-8 h-8"/>, title: "Sándwich", description: "Desayunos y brunchs gourmet" },
        { icon: <Icons.IceCreamIcon className="w-8 h-8"/>, title: "Helados Artesanales", description: "Producto externo de calidad premium" },
        { icon: <Icons.CoffeeIcon className="w-8 h-8"/>, title: "Café de especialidad", description: "Preparado con máquina automática de alto tráfico" },
        { icon: <Icons.SaladIcon className="w-8 h-8"/>, title: "Bowls saludables", description: "Opciones nutritivas y deliciosas" },
        { icon: <Icons.SmoothieIcon className="w-8 h-8"/>, title: "Batidos naturales", description: "Bebidas frescas y nutritivas" },
        { icon: <Icons.DrinkIcon className="w-8 h-8"/>, title: "Bebidas", description: "Frescas y Heladas" },
        { icon: <Icons.DeliveryIcon className="w-8 h-8"/>, title: "Delivery", description: "Servicio a domicilio establecido" },
        { icon: <Icons.TakeAwayIcon className="w-8 h-8"/>, title: "Take away", description: "Para llevar rápido y eficiente" },
    ];
    return (
        <Section>
            <SectionHeader
                title="Servicios y Productos"
                subtitle="Modelo dual con variedad de productos que garantizan ingresos constantes durante todo el día"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="bg-white border border-gray-200/80 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 mb-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto">
                            {service.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-1">{service.title}</h3>
                        <p className="text-slate-500 text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

const Operations = () => {
    const opItems = [
        { icon: <Icons.ClockIcon className="w-10 h-10"/>, title: "Horarios establecidos", values: ["Lun-Vie 07:30–16:30", "Horario Actual"], description: "Con clientela fiel y opción de ampliar" },
        { icon: <Icons.HomeIcon className="w-10 h-10"/>, title: "5 personas comprando", values: ["Capacidad Interior"], description: "Espacio optimizado para atención al paso" },
        { icon: <Icons.MapPinIcon className="w-10 h-10"/>, title: "Al paso + Delivery", values: ["Modalidad"], description: "Doble canal de ingresos optimizado" },
        { icon: <Icons.UsersIcon className="w-10 h-10"/>, title: "3-4 empleados", values: ["Personal"], description: "Equipo capacitado y experimentado" },
        { icon: <Icons.HomeIcon className="w-10 h-10"/>, title: "29.5 m² totalmente equipado", values: ["Local"], description: "Espacio optimizado para máxima eficiencia" },
    ];
    return(
        <Section className="bg-white">
            <SectionHeader
                title="Información Operativa"
                subtitle="Operación establecida y eficiente con todos los procesos optimizados"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
                {opItems.map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="w-20 h-20 mb-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-orange-600">{item.title}</h3>
                        {item.values.map(v => <p key={v} className="font-semibold text-slate-800 text-lg">{v}</p>)}
                        <p className="text-slate-500 text-sm mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-10 text-center shadow-lg">
                <h3 className="text-3xl font-extrabold tracking-tight">"WE LOVE PIZZA, WE LOVE BRUNCH"</h3>
                <p className="text-lg mt-2">Pioneros en pizza por slice al paso - Un lugar que ya forma parte de la ciudad.</p>
            </div>
        </Section>
    );
};

const Financials = () => {
    const [showEquipment, setShowEquipment] = React.useState(false);
    const [showExpenses, setShowExpenses] = React.useState(false);

    const financialItems = [
      { icon: <Icons.DollarSignIcon className="w-10 h-10"/>, title: "¿Cuál es el precio del Negocio?", value: "$20.000.000 CLP (Conversable)", description: "Una inversión llave en mano, lista para generar ingresos." },
      { icon: <Icons.TrendingUpIcon className="w-10 h-10"/>, title: "Ingresos Promedio Mensual", value: "$7.5M – $8.5M CLP", description: "Flujo comprobable y consistente" },
      { icon: <Icons.ClockIcon className="w-10 h-10"/>, title: "Rentabilidad Estimada", value: "15–20% anual", description: "Según gestión y optimización" },
    ];
    const assets = [
        { item: "Equipamiento, mobiliario y decoración", value: "9.400.000" },
        { item: "Marca y logo", value: "300.000" },
        { item: "Recetarios y procesos internos", value: "400.000" },
        { item: "Redes sociais (13.7k seguidores)", value: "300.000" },
        { item: "Capacitación post-venta", value: "400.000" },
        { item: "Listado de proveedores activos", value: "100.000" },
        { item: "Permisos y documentación legal", value: "200.000" },
    ];
    const goodwillItems = [
      "Negocio funcionando con ingresos comprobables",
      "Ubicación estratégica frente a la Municipalidad",
      "Marca posicionada y activa en redes sociales",
      "Proveedores activos, equipo operativo entrenado",
      "Flujo de ventas desde el primer día",
    ];
    const expenses = [
        { item: "Arriendo (18 UF)", value: "705.000" },
        { item: "Sueldos (3 personas)", value: "2.100.000" },
        { item: "Insumos y materias primas", value: "3.000.000", note: "Costo variable según menú y proveedores." },
        { item: "Servicios básicos (luz, agua)", value: "150.000" },
        { item: "Contabilidad mensual", value: "90.000" },
        { item: "Software de ventas", value: "90.000" },
        { item: "Internet", value: "35.000" },
        { item: "Gastos comunes", value: "20.000" },
        { item: "Klap (servicios de pago)", value: "30.000" },
        { item: "Marketing y publicidad", value: "150.000" },
        { item: "Otros gastos", value: "130.000" },
    ];
    
    const equipmentProd = [
        "1 Horno pizzero industrial", "1 Meson Saladette", "1 Cafetera automática", "3 congeladores + 1 visicoolers", "1 Amasadora + 1 anafe + 1 microondas",
        "1 Barquillera de 9 compartimentos", "2 Vitrinas calefaccionadas y 1 pastelera vertical", "1 Campana con extractor industrial", "1 Mesón de acero inoxidable",
        "Sistema de cámaras de seguridad", "1 Caja registradora, POS, y gabeta de dinero", "1 notebook marca HP", "Entre otros"
    ];
    const equipmentFurn = [
        "9 sillas y 3 mesas exteriores", "Muebles de caja y cafetería", "Lavaplatos y bodega funcional", "Letrero exterior con identidad de marca"
    ];

    const formatCurrency = (val: string) => `$${val.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

    return (
        <Section>
            <SectionHeader
                icon={<Icons.MoneyBagIcon className="w-12 h-12" />}
                title="Información Financiera"
                subtitle="Negocio operativo y rentable, con equipamiento completo, procesos estandarizados y una comunidad activa de clientes."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {financialItems.map((item, index) => (
                    <div 
                        key={index}
                        className={`
                            rounded-2xl p-8 text-center shadow-lg transition-transform duration-300
                            ${index === 0
                                ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white transform scale-105 shadow-xl shadow-orange-500/30 hover:scale-[1.08]"
                                : "bg-white border border-gray-200 hover:shadow-xl hover:scale-105"
                            }
                        `}
                    >
                        <div className={`w-20 h-20 mb-4 rounded-full flex items-center justify-center mx-auto ${index === 0 ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-500'}`}>
                            {item.icon}
                        </div>
                        <h3 className={`text-lg font-bold ${index === 0 ? 'text-white' : 'text-slate-800'}`}>{item.title}</h3>
                        <p className={`text-3xl font-extrabold my-2 ${index === 0 ? 'text-white' : 'text-orange-600'}`}>{item.value}</p>
                        <p className={`text-sm ${index === 0 ? 'text-orange-100' : 'text-slate-500'}`}>{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg mb-8">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2"><Icons.ClipboardIcon className="w-6 h-6 text-orange-500"/>¿Qué recibes con esta inversión?</h3>
                        <div className="space-y-3">
                            {assets.map(asset => (
                                <div key={asset.item} className="py-2 border-b border-gray-200 text-sm">
                                    {asset.item === "Equipamiento, mobiliario y decoración" ? (
                                        <>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-slate-600 font-semibold">{asset.item}</span>
                                                    <button
                                                        onClick={() => setShowEquipment(!showEquipment)}
                                                        className="text-orange-600 font-bold py-1 px-3 rounded-full text-sm border border-orange-500 hover:bg-orange-50 transition-colors flex items-center gap-1"
                                                        aria-expanded={showEquipment}
                                                        aria-controls="equipment-details"
                                                    >
                                                        {showEquipment ? 'Ocultar' : 'ver equipamiento'}
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${showEquipment ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                    </button>
                                                </div>
                                                <span className="font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">{formatCurrency(asset.value)}</span>
                                            </div>
                                            <div id="equipment-details" className={`transition-all duration-500 ease-in-out overflow-hidden ${showEquipment ? 'max-h-[1000px] mt-4' : 'max-h-0'}`}>
                                                <div className="p-4 bg-slate-50 rounded-lg border border-gray-200">
                                                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><Icons.ZapIcon className="text-orange-500 w-5 h-5"/>Equipamiento operativo incluido</h4>
                                                    <p className="text-slate-600 mb-3 text-xs">Todo el local se entrega con equipamiento profesional listo para producción:</p>
                                                    <ul className="space-y-1 text-xs text-slate-700 mb-4">
                                                        {equipmentProd.map(item => <li key={item} className="flex items-center gap-2"><Icons.CheckCircleIcon className="w-4 h-4"/>{item}</li>)}
                                                    </ul>
                                                    <h5 className="font-bold mb-2 flex items-center gap-2"><Icons.HomeIcon className="w-4 h-4 text-orange-500"/>Mobiliario y Decoración</h5>
                                                    <ul className="space-y-1 text-xs text-slate-700">
                                                        {equipmentFurn.map(item => <li key={item} className="flex items-center gap-2"><Icons.CheckCircleIcon className="w-4 h-4"/>{item}</li>)}
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-600">{asset.item}</span>
                                            <span className="font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">{formatCurrency(asset.value)}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between items-center pt-4 mt-2 font-bold text-lg border-t-2 border-orange-500">
                            <span className="text-slate-800">Valor total activos tangibles e intangibles</span>
                            <span className="text-orange-600">$11.100.000</span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">+ Valor adicional por operación en marcha (Goodwill)</h3>
                        <p className="text-5xl font-extrabold text-orange-600 text-center mb-6">$8.900.000 CLP</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-600 mb-6">
                            {goodwillItems.map(item => (
                                <p key={item} className="flex items-start gap-2"><span className="text-orange-500 mt-1">●</span> {item}</p>
                            ))}
                        </div>
                        <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-4 rounded-r-lg flex items-center gap-4">
                            <Icons.GreenCheckIcon className="w-8 h-8 flex-shrink-0" fill="#4CAF50"/>
                            <p className="font-semibold">No estás comprando solo un local. Estás adquiriendo un modelo que funciona y genera ventas reales con bajo riesgo operativo.</p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2"><Icons.CalendarIcon className="w-6 h-6 text-orange-500"/>Gastos Operativos Mensuales</h3>
                     <div className="flex justify-between items-center pt-2 pb-4">
                        <span className="text-slate-800 font-bold text-lg">Total mensual promedio</span>
                        <span className="text-orange-600 font-bold text-lg">$6.500.000</span>
                    </div>

                    <button
                        onClick={() => setShowExpenses(!showExpenses)}
                        className="text-orange-600 font-bold py-2 px-4 rounded-full text-sm border border-orange-500 hover:bg-orange-50 transition-colors flex items-center gap-2 w-full justify-center"
                        aria-expanded={showExpenses}
                        aria-controls="expenses-details"
                    >
                        {showExpenses ? 'Ocultar desglose' : 'Ver desglose de gastos'}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${showExpenses ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    
                    <div id="expenses-details" className={`transition-all duration-500 ease-in-out overflow-hidden ${showExpenses ? 'max-h-[1000px] mt-4' : 'max-h-0'}`}>
                        <div className="space-y-3 pt-4 border-t">
                            {expenses.map(expense => (
                                <div key={expense.item} className="py-2 border-b border-gray-200 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">{expense.item}</span>
                                        <span className="font-semibold text-slate-700">{formatCurrency(expense.value)}</span>
                                    </div>
                                    {expense.note && <p className="text-xs text-slate-500 mt-1">{expense.note}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Price Justification Section */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg mt-16">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <Icons.TrendingUpIcon className="w-7 h-7 text-orange-500" />
                    <span>🔍 Justificación de Precio</span>
                </h3>

                <div className="space-y-6">
                    {/* Key Metrics */}
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex flex-wrap justify-between items-center border-b pb-2 gap-2">
                            <span className="font-semibold">Precio de Venta:</span>
                            <span className="font-bold text-lg text-orange-600">CLP 20 000 000 (Conversable)</span>
                        </li>
                        <li className="flex flex-wrap justify-between items-center border-b pb-2 gap-2">
                            <span className="font-semibold">Múltiplo EBITDA:</span>
                            <span className="text-right">
                                <strong className="font-bold text-lg text-orange-600">~1,7×</strong>
                                <p className="text-xs text-slate-500">(EBITDA anual CLP 12 000 000)</p>
                            </span>
                        </li>
                        <li className="flex flex-wrap justify-between items-center border-b pb-2 gap-2">
                            <span className="font-semibold">Payback Estimado:</span>
                             <span className="text-right">
                                <strong className="font-bold text-lg text-orange-600">20–24 meses</strong>
                                <p className="text-xs text-slate-500">basados en flujo neto mensual de CLP 1 000 000</p>
                            </span>
                        </li>
                    </ul>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                        {/* Market Comparison */}
                        <div>
                            <h4 className="font-bold text-slate-800 mb-2">Comparativa de Mercado:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                                <li>Restaurantes similares suelen venderse a <strong className="font-semibold text-orange-600">2–3× EBITDA</strong>.</li>
                                <li>Deprizza se oferta con descuento, acelerando recuperación de inversión.</li>
                            </ul>
                        </div>

                        {/* Key Advantages */}
                        <div>
                            <h4 className="font-bold text-slate-800 mb-2">Ventajas Clave:</h4>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600">
                                <li>Bajo múltiplo, retorno rápido.</li>
                                <li>Activos tangibles e intangibles incluidos (<strong className="font-semibold text-orange-600">CLP 11,1 M + goodwill CLP 8,9 M</strong>).</li>
                                <li>Operación probada y procesos estandarizados.</li>
                            </ol>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="!mt-8 bg-green-50 border-l-4 border-green-500 text-green-800 p-4 rounded-r-lg">
                        <p className="font-semibold">El precio es negociable. ¡Agenda una visita para revisar los números y proyecciones!</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

const Location = () => {
    return (
        <Section className="bg-white">
            <SectionHeader
                icon={<Icons.MapPinIcon className="w-12 h-12" />}
                title="Ubicación y Entorno"
                subtitle="Ubicado en una zona de alto tráfico peatonal frente a la Municipalidad de Osorno, rodeado de Oficinas, Servicio de Salud, Bancos y comercio local."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><Icons.MapPinIcon className="text-orange-500 w-6 h-6"/>Dirección y Entorno</h3>
                    <p className="font-semibold text-slate-700">Ubicación:</p>
                    <p className="text-slate-600 mb-4">Zona comercial consolidada<br/>Pasaje Consistorial, Osorno</p>
                    <p className="font-semibold text-slate-700">Puntos de interés cercanos:</p>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                        <li>Liceos y centros educativos</li>
                        <li>Sector de oficinas públicas y privadas</li>
                        <li>Bancos, Notarías y Servicios Públicos</li>
                        <li>Alto tráfico peatonal y comercial</li>
                    </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Icons.FileTextIcon className="text-orange-500 w-6 h-6"/>Especificaciones del Local</h3>
                    <div className="space-y-4 text-sm pt-4 border-t mt-4 border-gray-200">
                        <div className="flex justify-between">
                            <span className="font-semibold text-slate-700">Superficie total:</span>
                            <span className="text-slate-600">29.5 m²</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold text-slate-700">Formato del espacio:</span>
                            <span className="text-slate-600 text-right">Área integrada: atención, cocina, baño, y bodega 2do piso</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold text-slate-700">Capacidad actual:</span>
                            <span className="text-slate-600">Hasta 5 personas comprando</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold text-slate-700">Ventanas frontales:</span>
                            <span className="text-slate-600 text-right">2 grandes, con visibilidad hacia el exterior</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

const RequestImages = () => (
    <Section>
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-10 text-center shadow-lg">
            <h3 className="text-3xl font-extrabold tracking-tight">¿Quieres Ver Más?</h3>
            <p className="text-lg mt-2">Si estás interesado, contáctanos para solicitar imágenes y videos del local.</p>
        </div>
    </Section>
);

const Contact = () => {
    const contactMethods = [
      { icon: <Icons.PhoneIcon className="w-6 h-6"/>, title: "Teléfono", value: ["+56 9 3251 5082", "+56 9 5581 8703"], description: "Llámanos de 9:00 a 20:00" },
      { icon: <Icons.MailIcon className="w-6 h-6"/>, title: "Email", value: ["deprizza.cl@gmail.com"], description: "Respuesta en 24 horas" },
      { icon: <Icons.WhatsAppIcon className="w-6 h-6 text-white"/>, title: "WhatsApp", value: ["+56 9 3251 5082", "+56 9 5581 8703"], description: "Respuesta inmediata", iconBg: "bg-green-500" },
    ];
    const infoItems = [
      { icon: <Icons.ClockIcon className="w-6 h-6"/>, title: "Horarios de Atención", lines: ["Lunes a Viernes: 9:00 - 20:00", "Sábados: 10:00 - 18:00", "Domingos: Solo WhatsApp"] },
      { icon: <Icons.MapPinIcon className="w-6 h-6"/>, title: "Visitas al Local", lines: ["Coordina una visita presencial para conocer las instalaciones en funcionamiento"] },
    ];

    return (
        <Section id="contact" className="bg-white">
            <SectionHeader
                icon={<Icons.PhoneCallIcon className="w-12 h-12" />}
                title="¿Interesado en el Traspaso?"
                subtitle="Este negocio está completamente operativo y listo para entregar."
            />
            <p className="text-center text-lg font-bold text-orange-600 -mt-8 mb-12">
                Por favor, solo consultas serias y con real interés de inversión.
            </p>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Métodos de Contacto</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {contactMethods.map((method, index) => (
                    <div key={index} className="bg-slate-50 border border-gray-200 rounded-2xl p-6 flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-orange-500 ${method.iconBg || 'bg-orange-100'}`}>
                            {method.icon}
                        </div>
                        <div>
                            <p className="font-bold text-slate-800">{method.title}</p>
                            {method.value.map(v => <p key={v} className="font-semibold text-orange-600">{v}</p>)}
                            <p className="text-sm text-slate-500">{method.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {infoItems.map((item, index) => (
                    <div key={index} className="bg-slate-100 border border-gray-200 rounded-2xl p-6 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-slate-600 bg-slate-200">
                            {item.icon}
                        </div>
                        <div>
                            <p className="font-bold text-slate-800">{item.title}</p>
                            {item.lines.map(line => <p key={line} className="text-sm text-slate-600">{line}</p>)}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

const SaleProcess = () => {
    const steps = [
        "Consulta inicial",
        "Visita presencial al local para conocer el funcionamiento real",
        "Negociación de condiciones y resolución de dudas",
        "Firma de contrato de traspaso y pago",
        "Capacitación personalizada, para asegurar continuidad y éxito"
    ];
    const reasons = [
      { icon: <Icons.TargetIcon className="w-8 h-8"/>, title: "Cambio de giro", description: "Enfoque en nuevos proyectos personales y profesionales" },
      { icon: <Icons.HeartIcon className="w-8 h-8"/>, title: "Operación estable", description: "La venta no se debe a problemas del negocio" },
      { icon: <Icons.ArrowRightIcon className="w-8 h-8"/>, title: "Negocio rentable", description: "Con una operación estable, rentable y en marcha" },
    ];
    return (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <SectionHeader
                        icon={<Icons.GreenCheckIcon className="w-12 h-12" fill="#4CAF50"/>}
                        title="Proceso de Venta"
                        subtitle="Queremos que el proceso sea transparente, ordenado y sin sorpresas. Así es como avanzamos con los interesados serios:"
                    />
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                        <ol className="space-y-4">
                            {steps.map((step, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">{index + 1}</div>
                                    <span className="text-slate-700">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div>
                    <SectionHeader
                        icon={<Icons.RocketIcon className="w-12 h-12" />}
                        title="¿Por qué se vende?"
                        subtitle=""
                    />
                    <div className="relative bg-slate-100 border border-gray-200 rounded-2xl p-8 text-center mb-8">
                        <Icons.SpeechBubbleIcon className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 text-slate-300"/>
                        <p className="text-xl italic text-slate-700 font-medium">"Después de más de 3 años construyendo y consolidando Deprizza, sus fundadores deciden enfocarse en nuevos proyectos personales y profesionales."</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {reasons.map((reason, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                                <div className="w-16 h-16 mb-3 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto">
                                    {reason.icon}
                                </div>
                                <h3 className="font-bold text-slate-800">{reason.title}</h3>
                                <p className="text-xs text-slate-500">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};


function App() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Header />
      <BusinessSummary />
      <Services />
      <Operations />
      <Financials />
      <Location />
      <RequestImages />
      <Contact />
      <SaleProcess />
      <footer className="bg-slate-800 text-slate-400 text-center p-6">
        <p>&copy; {new Date().getFullYear()} Deprizza. Todos los derechos reservados.</p>
        <p className="text-sm mt-1">Osorno, Chile</p>
      </footer>
    </div>
  );
}

export default App;
