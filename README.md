# AgroPro - Plataforma B2B de Gestión Operativa

**Plataforma B2B Premium de Gestión Operativa para Distribuidora de Productos Agropecuarios**

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

---

## 📋 Descripción

**AgroPro** es una plataforma visual B2B ultra premium diseñada para centralizar y optimizar toda la operación de una distribuidora de productos agropecuarios. Digitaliza completamente el flujo desde la recepción de pedidos hasta la facturación final.

---

## ✨ Características Principales

### 🎨 Diseño & UX
- Interfaz ultra premium con estética SaaS enterprise
- Diseño responsive (desktop-first, mobile-friendly)
- Navegación intuitiva con sidebar colapsable
- Topbar con búsqueda global, notificaciones y usuario
- Paleta de colores profesional

### 📊 Visualización de Datos
- Dashboard ejecutivo con KPIs principales
- Gráficos dinámicos (barras, líneas, donas)
- Tablas profesionales con filtros y búsqueda
- Timeline de trazabilidad
- Mapa visual mock de ubicaciones

### 🔐 Gestión Operativa
- Control completo del ciclo de pedido
- Validación inteligente de inventario
- Asignación de vehículos y conductores
- Planificación y optimización de rutas
- Remisiones digitales con firma
- Gestión de cartera por cobrar

---

## 📦 Módulos (12 Total)

1. **Dashboard** - KPIs, gráficos, alertas
2. **Gestión de Pedidos** - Crear, editar, seguimiento
3. **Clientes y Fincas** - Directorio, historial, cartera
4. **Inventario** - Control de stock, movimientos
5. **Logística y Despachos** - Alistamientos, despachos
6. **Gestión de Flota** - Vehículos, conductores
7. **Planificación de Rutas** - Optimización, mapa
8. **Remisiones y Entregas** - Entregas digitales, firmas
9. **Facturación y Cartera** - Facturas, cuentas por cobrar
10. **Alertas y Notificaciones** - Centro de alertas
11. **Reportes** - Análisis y exportaciones
12. **Configuración** - Usuarios, roles, parámetros

---

## 🗂️ Estructura del Proyecto

```
agropro/
├── app/                          # Páginas (Next.js App Router)
│   ├── page.tsx                 # Dashboard
│   ├── pedidos/                 # Módulo pedidos
│   ├── clientes/                # Módulo clientes
│   ├── inventario/              # Módulo inventario
│   ├── logistica/               # Módulo logística
│   ├── flota/                   # Módulo flota
│   ├── rutas/                   # Módulo rutas
│   ├── remisiones/              # Módulo remisiones
│   ├── facturacion/             # Módulo facturación
│   ├── alertas/                 # Módulo alertas
│   ├── reportes/                # Módulo reportes
│   └── configuracion/           # Módulo configuración
├── components/                   # Componentes reutilizables
│   ├── layout/                  # Sidebar, Topbar, AppShell
│   ├── ui/                      # Botones, cards, modales
│   └── charts/                  # Gráficos con Recharts
└── data/                         # Datos mock centralizados
```

---

## 🚀 Instalación

### Requisitos
- Node.js 18.17+
- npm 9+ o yarn 4+

### Pasos

```bash
# Clonar
git clone https://github.com/tubiofederico-prog/agropro.git
cd agropro

# Instalar
npm install

# Ejecutar
npm run dev

# Abrir en navegador
http://localhost:3000
```

---

## 🛠️ Stack Tecnológico

- **Next.js 15** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **Recharts** - Gráficos
- **Lucide React** - Iconos

---

## 📊 Datos Mock Incluidos

- 10 clientes ganaderos
- 15 productos agropecuarios
- 8 pedidos en distintos estados
- 7 vehículos + 5 conductores
- 7 remisiones
- 5 facturas
- 4 rutas activas
- 11 alertas operativas

---

## 🎨 Flujo de Operación

```
CLIENTE → PEDIDO → VALIDACIÓN → ALISTAMIENTO → DESPACHO 
    ↓
LOGÍSTICA → RUTA → ENTREGA → FIRMA DIGITAL 
    ↓
REMISIÓN → FACTURACIÓN → CARTERA
```

---

## 🔗 Enlaces

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Recharts](https://recharts.org/)

---

## 👤 Autor

**Federico Tubio**
- Email: tubiofederico@gmail.com
- GitHub: [@tubiofederico-prog](https://github.com/tubiofederico-prog)

---

**Hecho con ❤️ para optimizar operaciones agropecuarias**
