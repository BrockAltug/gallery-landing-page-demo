"use client"

import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Share2, ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react"


interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  images: string[]
  category: string
  materials: string[]
  dimensions: string
  artisan: {
    name: string
    location: string
    avatar: string
  }
  rating: number
  reviews: number
  inStock: boolean
  features: string[]
}

interface ProductShowcaseModalProps {
  isOpen: boolean
  onClose: () => void
  product: Product
}

export function ProductShowcaseModal({ isOpen, onClose, product }: ProductShowcaseModalProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" title="">
      <div className="grid md:grid-cols-2 gap-8 p-6">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-2xl overflow-hidden bg-sand/20 relative group">
            <img
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Image Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedImage ? "bg-white shadow-artisan scale-125" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                  index === selectedImage
                    ? "ring-2 ring-eucalyptus shadow-artisan scale-105"
                    : "hover:scale-105 hover:shadow-artisan"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <Badge variant="secondary" className="mb-2 bg-eucalyptus/10 text-eucalyptus">
                  {product.category}
                </Badge>
                <h1 className="text-3xl font-display font-bold text-foreground leading-tight">{product.name}</h1>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="rounded-full hover:bg-sand/50"
              >
                <Heart
                  className={`h-5 w-5 transition-colors duration-200 ${
                    isWishlisted ? "fill-red-500 text-red-500" : "text-muted-foreground"
                  }`}
                />
              </Button>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline space-x-3">
            <span className="text-3xl font-bold text-foreground">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
            )}
            {product.originalPrice && (
              <Badge variant="destructive" className="bg-terracotta text-white">
                Save ${product.originalPrice - product.price}
              </Badge>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">{product.description}</p>

          {/* Artisan Info */}
          <div className="flex items-center space-x-3 p-4 bg-sand/20 rounded-2xl">
            <img
              src={product.artisan.avatar || "/placeholder.svg"}
              alt={product.artisan.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-foreground">Crafted by {product.artisan.name}</p>
              <p className="text-sm text-muted-foreground">{product.artisan.location}</p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-eucalyptus rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Materials & Dimensions */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-1">Materials</h4>
              <p className="text-muted-foreground">{product.materials.join(", ")}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Dimensions</h4>
              <p className="text-muted-foreground">{product.dimensions}</p>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="font-semibold text-foreground">Quantity:</label>
              <div className="flex items-center border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-sand/50 transition-colors duration-200"
                >
                  -
                </button>
                <span className="px-4 py-2 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-sand/50 transition-colors duration-200"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                size="lg"
                className="flex-1 gradient-eucalyptus text-white rounded-2xl hover:shadow-artisan-xl transition-all duration-300 hover-lift"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl border-eucalyptus text-eucalyptus hover:bg-eucalyptus hover:text-white transition-all duration-300 bg-transparent"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-sand">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Truck className="h-4 w-4 text-eucalyptus" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-eucalyptus" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <RotateCcw className="h-4 w-4 text-eucalyptus" />
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
