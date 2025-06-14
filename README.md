# Dynamic Dashboard with Charts

A dynamic, responsive dashboard application built with Angular, GridStack, eCharts and PrimeNG, featuring interactive charts and data visualization.

## Demonstration

https://github.com/user-attachments/assets/d3993a91-f423-4f6c-8170-826879b571eb

## 🚀 Features

- **Interactive Dashboard Layout**
  - Drag-and-drop grid system using GridStack
  - Responsive and customizable widget positioning
  - Real-time layout updates

- **Advanced Charting**
  - Line charts for trend analysis
  - Bar charts with interactive features
  - Tree charts for hierarchical data visualization
  - Gauge charts for metric monitoring
  - All charts are responsive and interactive

- **Modern UI/UX**
  - Clean and intuitive interface
  - Responsive design for all screen sizes
  - Smooth animations and transitions
  - Pixel-perfect implementation of Figma designs

## 🛠️ Technology Stack

- **Frontend Framework**: Angular 19.2.0
- **UI Components**: PrimeNG
- **Charting Library**: ECharts
- **Grid System**: GridStack
- **Styling**: SCSS
- **TypeScript**: 5.7.2

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (Latest Version)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd poc-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── dashboard/
│   │   │   └── dashboard.component.ts
│   │   └── charts/
│   │       ├── line-chart/
│   │       ├── bar-chart/
│   │       └── pie-chart/
│   ├── services/
│   └── models/
├── assets/
└── styles/
```

## 🎨 Component Architecture

- **Dashboard Component**
  - Manages the overall layout
  - Handles widget positioning and resizing
  - Coordinates between different chart components

- **Chart Components**
  - Each chart is a standalone component
  - Implements BaseWidget for grid integration
  - Responsive and interactive by default
  - Customizable through configuration options

## 🔧 Configuration

The dashboard can be configured through the `dashboard.component.ts` file:

```typescript
protected gridOptions: NgGridStackOptions = {
  cellHeight: 50,
  margin: 5,
  acceptWidgets: true,
  column: 24,
  // ... other options
};
```

## 📦 Building for Production

```bash
# Build the project
ng build --prod

# Build with specific configuration
ng build --configuration=production
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Requeste

## 📈 Performance Optimization

- Lazy loading of modules
- Optimized bundle size
- Efficient change detection
- Proper memory management

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Roland Soh

## 🙏 Acknowledgments

- PrimeNG for the UI components
- ECharts for the charting library
- GridStack for the grid system
