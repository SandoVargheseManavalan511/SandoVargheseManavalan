import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Star } from 'lucide-react';
import TruncatedText from './TruncatedText';
import ImageSlider from './ImageSlider';

interface Testimonial {
    name: string;
    // role: string;
    text?: string;
    imageUrl?: string;
    imageUrls?: string[];
    videoUrl?: string;
    // rating: number;
    avatar: string;
    year: number;
}

interface AllTestimonialsModalProps {
    isOpen: boolean;
    onClose: () => void;
    testimonials: Testimonial[];
}

export default function AllTestimonialsModal({ isOpen, onClose, testimonials }: AllTestimonialsModalProps) {
    const [displayedCount, setDisplayedCount] = useState(10);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setDisplayedCount(10); // Reset when modal opens
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const scrollPosition = target.scrollTop + target.clientHeight;
        const scrollHeight = target.scrollHeight;

        // Load more when scrolled to 80% of the content
        if (scrollPosition >= scrollHeight * 0.8 && displayedCount < testimonials.length) {
            setDisplayedCount(prev => Math.min(prev + 10, testimonials.length));
        }
    };

    if (!isOpen) return null;

    const displayedTestimonials = testimonials.slice(0, displayedCount);

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-6xl h-[95vh] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-2xl border-2 border-cyan-400/30 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-cyan-400/30 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">
                                All <span className="text-cyan-400">Testimonials</span>
                            </h2>
                            <p className="text-gray-400">
                                Showing {displayedCount} of {testimonials.length} testimonials
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-cyan-400/10 transition-colors duration-200 group"
                            aria-label="Close modal"
                        >
                            <X className="w-6 h-6 text-gray-400 group-hover:text-cyan-400" />
                        </button>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div
                    ref={scrollContainerRef}
                    className="overflow-y-auto p-6 space-y-6"
                    style={{ maxHeight: 'calc(90vh - 120px)' }}
                    onScroll={handleScroll}
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayedTestimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className=" flex flex-col justify-between glass-morphism rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 group"
                            >
                                <div>
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-cyan-400 group-hover:animate-pulse-glow">
                                            <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">{testimonial.name}</h4>
                                            {/* <p className="text-cyan-400 text-sm font-mono">{testimonial.role}</p> */}
                                        </div>
                                    </div>

                                    {/* <div className="flex items-center space-x-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div> */}

                                    {/* Content: Text, Image, or Video */}
                                    {testimonial.text && (
                                        <TruncatedText text={testimonial.text} maxWords={50} bold={index < 3} />
                                    )}

                                    {(testimonial.imageUrl || testimonial.imageUrls) && (
                                        testimonial.imageUrls && testimonial.imageUrls.length > 0 ? (
                                            <ImageSlider 
                                                images={testimonial.imageUrls} 
                                                altText={`Testimonial from ${testimonial.name}`}
                                            />
                                        ) : testimonial.imageUrl ? (
                                            <div className="rounded-lg overflow-hidden border border-cyan-400/30 mx-auto max-w-xs">
                                                <img
                                                    src={testimonial.imageUrl}
                                                    alt={`Testimonial from ${testimonial.name}`}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                        ) : null
                                    )}

                                    {testimonial.videoUrl && (
                                        <div className="rounded-lg overflow-hidden border border-cyan-400/30 mx-auto max-w-xs">
                                            <video
                                                controls
                                                className="w-full h-auto"
                                                // style={{ aspectRatio: '9/16' }}
                                                preload="metadata"
                                            >
                                                <source src={testimonial.videoUrl} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div className="mt-4 pt-4 border-t border-gray-700">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-green-400 font-semibold">✓ Verified Client</span>
                                            <span className="text-gray-500 font-mono">{testimonial.year}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Loading indicator */}
                    {displayedCount < testimonials.length && (
                        <div className="text-center py-4">
                            <div className="inline-block animate-pulse text-cyan-400 font-mono">
                                Loading more testimonials...
                            </div>
                        </div>
                    )}

                    {displayedCount >= testimonials.length && testimonials.length > 10 && (
                        <div className="text-center py-4 text-gray-400 font-mono">
                            All testimonials loaded
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
