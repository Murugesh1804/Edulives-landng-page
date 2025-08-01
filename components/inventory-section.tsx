import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, BookOpen, FlaskConical, Laptop, Trophy, Heart, Utensils, Shirt } from "lucide-react"

const inventoryCategories = [
  {
    icon: Package,
    title: "Stationery Inventory",
    description: "Exercise books, pens, pencils, files, sheets, registers with automated reorder alerts",
    items: ["Exercise Books", "Writing Materials", "Files & Folders", "Office Supplies"],
  },
  {
    icon: FlaskConical,
    title: "Lab Equipment",
    description: "Science lab apparatus, computer lab items with safety stock levels and maintenance tracking",
    items: ["Science Equipment", "Computer Accessories", "Safety Gear", "Chemicals"],
  },
  {
    icon: Laptop,
    title: "Electronic Assets",
    description: "Computers, projectors, printers with warranty tracking and maintenance logs",
    items: ["Computers", "Projectors", "Printers", "Audio/Visual Equipment"],
  },
  {
    icon: BookOpen,
    title: "Library Assets",
    description: "Books, digital resources, furniture with barcode scanning and damage tracking",
    items: ["Books", "Digital Resources", "Furniture", "Reading Materials"],
  },
  {
    icon: Trophy,
    title: "Sports Equipment",
    description: "Sports gear, art materials, music instruments with issue/return tracking",
    items: ["Sports Gear", "Art Supplies", "Music Instruments", "Event Equipment"],
  },
  {
    icon: Heart,
    title: "Medical Supplies",
    description: "First-aid kits, emergency medicine with refill alerts and health kit audits",
    items: ["First Aid Kits", "Medicines", "Health Equipment", "Emergency Supplies"],
  },
  {
    icon: Utensils,
    title: "Cleaning Supplies",
    description: "Maintenance stock with restocking cycles and supply chain management",
    items: ["Cleaning Chemicals", "Tools", "Maintenance Equipment", "Hygiene Supplies"],
  },
  {
    icon: Shirt,
    title: "Uniform Store",
    description: "School uniforms, badges, ID cards with sales tracking and inventory management",
    items: ["Uniforms", "Badges", "ID Cards", "Accessories"],
  },
]

export function InventorySection() {
  return (
    <section id="inventory" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Complete Inventory Management</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Track, manage, and optimize all your school assets with our comprehensive inventory management system
            designed for educational institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inventoryCategories.map((category, index) => (
            <Card
              key={index}
              className="border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-slate-900 text-lg">{category.title}</CardTitle>
                <CardDescription className="text-slate-600 text-sm">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart Inventory Features</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Automated Reorder Alerts</h4>
                    <p className="text-slate-600">Get notified when stock levels are low</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Barcode Integration</h4>
                    <p className="text-slate-600">Quick scanning for issue and return tracking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Damage Tracking</h4>
                    <p className="text-slate-600">Monitor asset condition and maintenance needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Vendor Management</h4>
                    <p className="text-slate-600">Track suppliers and purchase history</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-4">Sample Inventory Report</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Exercise Books</span>
                    <span className="font-semibold text-green-600">In Stock (450)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Whiteboard Markers</span>
                    <span className="font-semibold text-yellow-600">Low Stock (15)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Lab Beakers</span>
                    <span className="font-semibold text-red-600">Out of Stock</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Sports Balls</span>
                    <span className="font-semibold text-green-600">In Stock (28)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
