import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  DollarSign,
  ShoppingCart,
  Settings,
  BarChart2,
  List,
  Calendar,
  MessageSquare,
  Layers,
  Wrench,
  Circle,
} from "lucide-react";
import "./Sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
}

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Contabilitate",
    icon: <BookOpen size={20} />,
    subItems: [
      { label: "Note contabile", icon: <Circle size={8} /> },
      { label: "Mijloace fixe", icon: <Circle size={8} /> },
      { label: "Declaratii fiscale", icon: <Circle size={8} /> },
      { label: "Jurnale de TVA", icon: <Circle size={8} /> },
      { label: "Situatii contabile", icon: <Circle size={8} /> },
      { label: "Raportari BNR", icon: <Circle size={8} /> },
      { label: "Blocare perioada", icon: <Circle size={8} /> },
    ],
  },
  {
    label: "Financiar",
    icon: <DollarSign size={20} />,
    subItems: [
      {
        label: "Operatiuni de trezorerie in LEI",
        icon: <Circle size={8} />,
      },
      {
        label: "Operatiuni de trezorerie in VALUTA",
        icon: <Circle size={8} />,
      },
      { label: "Cheltuieli in avans", icon: <Circle size={8} /> },
      { label: "Vanzari", icon: <Circle size={8} /> },
      { label: "Incasari", icon: <Circle size={8} /> },
      { label: "Documente primite", icon: <Circle size={8} /> },
      { label: "Plati", icon: <Circle size={8} /> },
      { label: "Bonuri de consum", icon: <Circle size={8} /> },
    ],
  },
  {
    label: "Comercial",
    icon: <ShoppingCart size={20} />,
    subItems: [
      { label: "Simulare credit", icon: <Circle size={8} /> },
      { label: "Solicitari clienti", icon: <Circle size={8} /> },
    ],
  },
  {
    label: "Administrare credite",
    icon: <Settings size={20} />,
    subItems: [
      { label: "Contracte", icon: <Circle size={8} /> },
      { label: "Comisioane la contracte", icon: <Circle size={8} /> },
      { label: "Trageri la contracte", icon: <Circle size={8} /> },
      { label: "Acte aditionale", icon: <Circle size={8} /> },
      { label: "Incasari la contracte", icon: <Circle size={8} /> },
      { label: "Garantii", icon: <Circle size={8} /> },
      { label: "Cereri de executare", icon: <Circle size={8} /> },
      { label: "Polite de asigurare", icon: <Circle size={8} /> },
    ],
  },
  {
    label: "Rapoarte",
    icon: <BarChart2 size={20} />,
    subItems: [
      { label: "Situatie debitori cedati", icon: <Circle size={8} /> },
      {
        label: "Situatie instrumente de plata finantate",
        icon: <Circle size={8} />,
      },
      { label: "Situatie facturi finantate", icon: <Circle size={8} /> },
      { label: "Status control intern ", icon: <Circle size={8} /> },
      { label: "Situatie portofoliu credite", icon: <Circle size={8} /> },
      { label: "Nota calcul dobanda factoring", icon: <Circle size={8} /> },
      { label: "Nota calcul dobanda", icon: <Circle size={8} /> },
      {
        label: "Nota calcul penalitati capital in luna",
        icon: <Circle size={8} />,
      },
      { label: "Istoric calcul penalitati capital", icon: <Circle size={8} /> },
      {
        label: "Nota calcul penalitati dobanda in luna",
        icon: <Circle size={8} />,
      },
      { label: "Istoric calcul penalitati dobanda", icon: <Circle size={8} /> },
      { label: "Nota calcul provizioane", icon: <Circle size={8} /> },
      { label: "Situatie reclasificare", icon: <Circle size={8} /> },
      { label: "Situatie solduri pe scadente", icon: <Circle size={8} /> },
      { label: "Verificare solduri", icon: <Circle size={8} /> },
    ],
  },
  {
    label: "Nomenclatoare",
    icon: <List size={20} />,
    subItems: [
      { label: "Plan de conturi", icon: <Circle size={8} /> },
      { label: "Parteneri", icon: <Circle size={8} /> },
      { label: "Articole", icon: <Circle size={8} /> },
      { label: "Curs BNR", icon: <Circle size={8} /> },
      { label: "Trezorerii", icon: <Circle size={8} /> },
      { label: "Comisioane", icon: <Circle size={8} /> },
      { label: "Scoring", icon: <Circle size={8} /> },
      { label: "Produse de finantare", icon: <Circle size={8} /> },
      { label: "Control intern", icon: <Circle size={8} /> },
      { label: "Conditii de eligibilitate", icon: <Circle size={8} /> },
      { label: "Jurnal operare", icon: <Circle size={8} /> },
    ],
  },
  {
    label: "Calendar",
    icon: <Calendar size={20} />,
  },
  {
    label: "Chat",
    icon: <MessageSquare size={20} />,
  },
  {
    label: "Diverse",
    icon: <Layers size={20} />,
    subItems: [
      { label: "Calculator", icon: <Circle size={8} /> },
      { label: "Note", icon: <Circle size={8} /> },
      { label: "Tasks", icon: <Circle size={8} /> },
    ],
  },
  {
    label: "Configurare",
    icon: <Wrench size={20} />,
    subItems: [
      { label: "Gestiuni", icon: <Circle size={8} /> },
      { label: "Utilizatori", icon: <Circle size={8} /> },
      { label: "Tipuri de articole", icon: <Circle size={8} /> },
      { label: "Plaja de numere", icon: <Circle size={8} /> },
      { label: "Numere de documente", icon: <Circle size={8} /> },
      { label: "Agenti de vanzare", icon: <Circle size={8} /> },
      { label: "Grupe de articole", icon: <Circle size={8} /> },
      { label: "Tipuri de contracte", icon: <Circle size={8} /> },
      { label: "Documente opis", icon: <Circle size={8} /> },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuClick = (label: string) => {
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === label ? null : label));
  };

  const renderMenuItem = (item: MenuItem) => (
    <div key={item.label} className="menu-item-container">
      <div className="menu-item" onClick={() => handleMenuClick(item.label)}>
        <div className="icon">{item.icon}</div>
        <div className="label">{item.label}</div>
        {item.subItems && (
          <div className="chevron">
            {openMenu === item.label ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </div>
        )}
      </div>
      {item.subItems && openMenu === item.label && (
        <div className="submenu">
          {item.subItems.map((subItem) => (
            <div key={subItem.label} className="menu-item sub-item">
              <div className="icon">{subItem.icon}</div>
              <div className="label">{subItem.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      {menuItems.map(renderMenuItem)}
    </aside>
  );
};

export default Sidebar;
