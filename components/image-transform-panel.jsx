"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Image as ImageIcon,
  Crop,
  Type,
  Wand2,
  Loader2,
  RefreshCw,
  Check,
  X,
} from "lucide-react";

const ASPECT_RATIOS = [
  { label: "Original", value: "original" },
  { label: "Square (1:1)", value: "1:1", width: 400, height: 400 },
  { label: "Landscape (16:9)", value: "16:9", width: 800, height: 450 },
  { label: "Portrait (4:5)", value: "4:5", width: 400, height: 500 },
  { label: "Story (9:16)", value: "9:16", width: 450, height: 800 },
  { label: "Custom", value: "custom" },
];

const SMART_CROP_OPTIONS = [
  { label: "Auto", value: "auto" },
  { label: "Face", value: "face" },
  { label: "Center", value: "center" },
  { label: "Top", value: "top" },
  { label: "Bottom", value: "bottom" },
];

const TEXT_POSITIONS = [
  { label: "Center", value: "center" },
  { label: "Top Left", value: "north_west" },
  { label: "Top Right", value: "north_east" },
  { label: "Bottom Left", value: "south_west" },
  { label: "Bottom Right", value: "south_east" },
  { label: "top", value: "north" },
  { label: "bottom", value: "south" },
  { label: "left", value: "west" },
  { label: "right", value: "east" },
];

export { ASPECT_RATIOS, SMART_CROP_OPTIONS, TEXT_POSITIONS };

export default function ImageTransformPanel({
  watchedValues,
  setValue,
  isTransforming,
  transformedImage,
  uploadedImage,
  onApplyTransformations,
  onResetTransformations,
  onSelectImage,
  onClose,
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-6 max-h-[60vh] overflow-y-auto">
      {/* Transformation Controls */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <Wand2 className="h-5 w-5 mr-2" />
            AI Transformations
          </h3>

          {/* Background Removal */}
          <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <Label className="text-white font-medium">
                Remove Background
              </Label>
              <Button
                type="button"
                variant={watchedValues.backgroundRemoved ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setValue("backgroundRemoved", !watchedValues.backgroundRemoved)
                }
              >
                {watchedValues.backgroundRemoved ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <X className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-sm text-slate-400">
              AI-powered background removal
            </p>
          </div>

          {/* Drop Shadow */}
          <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <Label className="text-white font-medium">Drop Shadow</Label>
              <Button
                type="button"
                variant={watchedValues.dropShadow ? "default" : "outline"}
                size="sm"
                disabled={!watchedValues.backgroundRemoved}
                onClick={() =>
                  setValue("dropShadow", !watchedValues.dropShadow)
                }
              >
                {watchedValues.dropShadow ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <X className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-sm text-slate-400">
              {watchedValues.backgroundRemoved
                ? "Add realistic shadow"
                : "Requires background removal"}
            </p>
          </div>
        </div>

        {/* Aspect Ratio & Cropping */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <Crop className="h-5 w-5 mr-2" />
            Resize & Crop
          </h3>

          <div className="space-y-3">
            <Label className="text-white">Aspect Ratio</Label>
            <Select
              value={watchedValues.aspectRatio}
              onValueChange={(value) => setValue("aspectRatio", value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ASPECT_RATIOS.map((ratio) => (
                  <SelectItem key={ratio.value} value={ratio.value}>
                    {ratio.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {watchedValues.aspectRatio === "custom" && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-white">Width</Label>
                <Input
                  type="number"
                  value={watchedValues.customWidth}
                  onChange={(e) =>
                    setValue("customWidth", parseInt(e.target.value) || 800)
                  }
                  min="100"
                  max="2000"
                />
              </div>
              <div>
                <Label className="text-white">Height</Label>
                <Input
                  type="number"
                  value={watchedValues.customHeight}
                  onChange={(e) =>
                    setValue("customHeight", parseInt(e.target.value) || 600)
                  }
                  min="100"
                  max="2000"
                />
              </div>
            </div>
          )}

          {watchedValues.aspectRatio !== "original" && (
            <div className="space-y-3">
              <Label className="text-white">Smart Crop Focus</Label>
              <Select
                value={watchedValues.smartCropFocus}
                onValueChange={(value) => setValue("smartCropFocus", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SMART_CROP_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {/* Text Overlay */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <Type className="h-5 w-5 mr-2" />
            Text Overlay
          </h3>

          <div className="space-y-3">
            <Label className="text-white">Text</Label>
            <Textarea
              value={watchedValues.textOverlay}
              onChange={(e) => setValue("textOverlay", e.target.value)}
              placeholder="Enter text to overlay..."
              rows={3}
            />
          </div>

          {watchedValues.textOverlay && (
            <>
              <div className="space-y-3">
                <Label className="text-white">
                  Font Size: {watchedValues.textFontSize}px
                </Label>
                <Slider
                  value={[watchedValues.textFontSize]}
                  onValueChange={(value) => setValue("textFontSize", value[0])}
                  max={200}
                  min={12}
                  step={2}
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label className="text-white">Text Color</Label>
                  <Input
                    type="color"
                    value={watchedValues.textColor}
                    onChange={(e) => setValue("textColor", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Position</Label>
                  <Select
                    value={watchedValues.textPosition}
                    onValueChange={(value) => setValue("textPosition", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {TEXT_POSITIONS.map((position) => (
                        <SelectItem key={position.value} value={position.value}>
                          {position.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={onApplyTransformations}
            disabled={isTransforming}
            variant={"primary"}
          >
            {isTransforming ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Wand2 className="h-4 w-4 mr-2" />
            )}
            Apply Transformations
          </Button>

          <Button onClick={onResetTransformations} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>

      {/* Image Preview */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <ImageIcon className="h-5 w-5 mr-2" />
          Preview
        </h3>

        {transformedImage && (
          <div className="relative">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <img
                src={transformedImage}
                alt="Transformed preview"
                className="w-full h-auto max-h-96 object-contain rounded-lg mx-auto"
                onError={() => {
                  // Handle error in parent component
                }}
              />
            </div>

            {isTransforming && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                <div className="bg-slate-800 rounded-lg p-4 flex items-center space-x-3">
                  <Loader2 className="h-5 w-5 animate-spin text-purple-400" />
                  <span className="text-white">
                    Applying transformations...
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {uploadedImage && transformedImage && (
          <div className="text-center space-y-4">
            <div className="text-sm text-slate-400">
              Current image URL ready for use
            </div>

            <div className="flex gap-3 justify-center">
              <Button
                onClick={onSelectImage}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Check className="h-4 w-4 mr-2" />
                Use This Image
              </Button>

              <Button
                onClick={onClose}
                variant="outline"
                className="border-slate-600 hover:bg-slate-700"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
