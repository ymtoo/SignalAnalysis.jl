var documenterSearchIndex = {"docs":
[{"location":"generate.html#Generating-signals-1","page":"Generating signals","title":"Generating signals","text":"","category":"section"},{"location":"generate.html#","page":"Generating signals","title":"Generating signals","text":"Modules = [SignalAnalysis]\nPages   = [\"generate.jl\"]","category":"page"},{"location":"generate.html#SignalAnalysis.chirp","page":"Generating signals","title":"SignalAnalysis.chirp","text":"chirp(freq1, freq2, duration)\nchirp(freq1, freq2, duration, fs; shape, phase, window)\n\n\nGenerates a frequency modulated chirp signal from freq1 to freq2 and specified duration at frame rate fs. The type of frequency modulation may be controlled using shape (:linear (default) or :hyperbolic). The starting phase and window type may be optionally specified.\n\nExamples:\n\njulia> x = chirp(5kHz, 7kHz, 100ms, 44.1kHz)\n4410-frame, 1-channel SampleBuf{Complex{Float64}, 1}\n0.1s sampled at 44100.0Hz\n\njulia> x = chirp(5kHz, 7kHz, 100ms, 44.1kHz; phase=45°, window=hamming)\n4410-frame, 1-channel SampleBuf{Complex{Float64}, 1}\n0.1s sampled at 44100.0Hz\n\njulia> x = chirp(5kHz, 7kHz, 100ms, 44.1kHz; shape=:hyperbolic, window=(tukey,0.05))\n4410-frame, 1-channel SampleBuf{Complex{Float64}, 1}\n0.1s sampled at 44100.0Hz\n\n\n\n\n\n","category":"function"},{"location":"generate.html#SignalAnalysis.cw-Tuple{Any,Any,Any}","page":"Generating signals","title":"SignalAnalysis.cw","text":"cw(freq, duration, fs; phase, window)\n\n\nGenerates a sinusoidal signal with specified freq and duration at frame rate fs. The starting phase and window type may be optionally specified.\n\nExamples:\n\njulia> x = cw(5kHz, 200ms, 44.1kHz)\n8820-frame, 1-channel SampleBuf{Complex{Float64}, 1}\n0.2s sampled at 44100.0Hz\n\njulia> x = cw(5kHz, 200ms, 44.1kHz; window=hamming)\n8820-frame, 1-channel SampleBuf{Complex{Float64}, 1}\n0.2s sampled at 44100.0Hz\n\njulia> x = cw(-5kHz, 200ms, 44.1kHz; phase=45°, window=(tukey, 0.05))\n8820-frame, 1-channel SampleBuf{Complex{Float64}, 1}\n0.2s sampled at 44100.0Hz\n\n\n\n\n\n","category":"method"},{"location":"iplot.html#Interactive-plotting-1","page":"Interactive plotting","title":"Interactive plotting","text":"","category":"section"},{"location":"iplot.html#","page":"Interactive plotting","title":"Interactive plotting","text":"Interactive plots use Interact.jl to build a simple GUI to allow viewing of long signals.","category":"page"},{"location":"iplot.html#","page":"Interactive plotting","title":"Interactive plotting","text":"Modules = [SignalAnalysis]\nPages   = [\"iplot.jl\"]","category":"page"},{"location":"basic.html#Basic-signal-analysis-1","page":"Basic signal analysis","title":"Basic signal analysis","text":"","category":"section"},{"location":"basic.html#","page":"Basic signal analysis","title":"Basic signal analysis","text":"Modules = [SignalAnalysis]\nPages   = [\"basic.jl\"]","category":"page"},{"location":"basic.html#SignalAnalysis.energy-Tuple{AbstractArray{T,1} where T}","page":"Basic signal analysis","title":"SignalAnalysis.energy","text":"energy(s; fs)\n\n\nComputes total signal energy.\n\n\n\n\n\n","category":"method"},{"location":"basic.html#SignalAnalysis.ifrequency-Tuple{Any}","page":"Basic signal analysis","title":"SignalAnalysis.ifrequency","text":"ifrequency(s; fs)\n\n\nComputes instantaneous frequency of the signal.\n\n\n\n\n\n","category":"method"},{"location":"basic.html#SignalAnalysis.meanfrequency-Tuple{AbstractArray{T,2} where T}","page":"Basic signal analysis","title":"SignalAnalysis.meanfrequency","text":"meanfrequency(s; fs, nfft, window)\n\n\nComputes mean frequency of a signal.\n\n\n\n\n\n","category":"method"},{"location":"basic.html#SignalAnalysis.meantime-Tuple{SampledSignals.SampleBuf}","page":"Basic signal analysis","title":"SignalAnalysis.meantime","text":"meantime(s)\n\n\nComputes mean time of the signal.\n\n\n\n\n\n","category":"method"},{"location":"basic.html#SignalAnalysis.rmsbandwidth-Union{Tuple{AbstractArray{T,2} where T}, Tuple{T}} where T","page":"Basic signal analysis","title":"SignalAnalysis.rmsbandwidth","text":"rmsbandwidth(s; fs, nfft, window)\n\n\nComputes RMS bandwidth of a signal.\n\n\n\n\n\n","category":"method"},{"location":"basic.html#SignalAnalysis.rmsduration-Tuple{SampledSignals.SampleBuf}","page":"Basic signal analysis","title":"SignalAnalysis.rmsduration","text":"rmsduration(s)\n\n\nComputes RMS duration of the signal.\n\n\n\n\n\n","category":"method"},{"location":"array.html#Array-signal-processing-1","page":"Array signal processing","title":"Array signal processing","text":"","category":"section"},{"location":"array.html#","page":"Array signal processing","title":"Array signal processing","text":"Modules = [SignalAnalysis]\nPages   = [\"array.jl\"]","category":"page"},{"location":"array.html#SignalAnalysis.Bartlett","page":"Array signal processing","title":"SignalAnalysis.Bartlett","text":"Frequency-domain Bartlett beamformer.\n\n\n\n\n\n","category":"type"},{"location":"array.html#SignalAnalysis.Capon","page":"Array signal processing","title":"SignalAnalysis.Capon","text":"Frequency-domain Capon beamformer with diagonal loading factor γ.\n\n\n\n\n\n","category":"type"},{"location":"array.html#SignalAnalysis.Music","page":"Array signal processing","title":"SignalAnalysis.Music","text":"Frequency-domain MUSIC beamformer with nsignals signals.\n\n\n\n\n\n","category":"type"},{"location":"array.html#SignalAnalysis.beamform-NTuple{4,Any}","page":"Array signal processing","title":"SignalAnalysis.beamform","text":"beamform(s, f, n, sd; fs=framerate(s), method=Bartlett())\nbeamform(s, f, sd; fs=framerate(s), method=Bartlett())\n\nNarrowband frequency-domain beamformer. Takes in passband signals s and produces beamformer output for all directions specified by the steering delays sd. The beamformer output is an energy estimate (or equivalent) for each steering direction. The beamforming only uses a narrowband signal cenetered at frequency f with a bandwidth of about fs/n.\n\nIf n is not specified, or is 1, then the input signal is assumed to be narrowband, and centered at frequency f.\n\nThe narrowband assumption requires that the bandwidth be no greater than about 5/T, where T is the maximum time taken for a signal to propagate through the array.\n\nSeveral beamforming methods are available:\n\nBartlett()\nCapon(γ)\nMusic(nsignals)\n\nCustom beamformers can be implemented by creating a subtype of SignalAnalysis.Beamformer and implementing the SignalAnalysis.beamformer() method dispatched on that type.\n\nExample:\n\njulia> x = cw(100.0, 1.0, 44100.0);\njulia> sd = steering(0.0:1.0:3.0, 1500.0, range(0.0, π; length=181));\njulia> bfo = beamform([x x x x], 100.0, 4096, sd; method=Capon(0.1))\n181-element Array{Float64,1}:\n 0.12406290296318974\n 0.1240975045516605\n ⋮\n 0.12406290296318974\n\n\n\n\n\n","category":"method"},{"location":"array.html#SignalAnalysis.beamform-Tuple{Any,Any}","page":"Array signal processing","title":"SignalAnalysis.beamform","text":"beamform(s, sd; fs=framerate(s))\n\nBroadband time-domain delay-and-sum beamformer. Takes in passband or baseband signals s and produces beamformer output for all directions specified by the steering delays sd. The beamformer output is a timeseries signal for each steering direction.\n\nExample:\n\njulia> x = cw(100.0, 1.0, 44100.0);\njulia> sd = steering(0.0:1.0:3.0, 1500.0, range(0.0, π; length=181));\njulia> bfo = beamform([x x x x], sd)\n44100-frame, 181-channel SampleBuf{Complex{Float64}, 2}\n1.0s sampled at 44100.0Hz\n  ⋮\n\n\n\n\n\n","category":"method"},{"location":"array.html#SignalAnalysis.steering-Tuple{AbstractArray{T,2} where T,Any,AbstractArray{T,1} where T}","page":"Array signal processing","title":"SignalAnalysis.steering","text":"steering(rxpos, c, θ)\n\n\nComputes steering delays for specified receiver positions rxpos, signal propagation speed c, and angles θ. Array θ can be a 1D array of angles or 2D array with (azimuth, elevation) pair in each row. The delays are computed with a far-field assumption, i.e., for plane incoming waves.\n\nExamples:\n\njulia> steering(0.0:1.0:5.0, 1500.0, range(0.0, π; length=181))\n6×181 Array{Float64,2}:\n  0.00166667    0.00166641   …  -0.00166641   -0.00166667\n  0.001         0.000999848     -0.000999848  -0.001\n  0.000333333   0.000333283     -0.000333283  -0.000333333\n -0.000333333  -0.000333283      0.000333283   0.000333333\n -0.001        -0.000999848      0.000999848   0.001\n -0.00166667   -0.00166641   …   0.00166641    0.00166667\n\njulia> rxpos = [  # can be 2D or 3D coordinates\n  0.0  1.0  2.0  3.0  4.0  5.0\n  0.0  0.0  0.0  0.0  0.0  0.0\n];\njulia> steering(rxpos, 1500.0, range(0.0, π; length=181))\n6×181 Array{Float64,2}:\n  0.00166667    0.00166641   …  -0.00166641   -0.00166667\n  0.001         0.000999848     -0.000999848  -0.001\n  0.000333333   0.000333283     -0.000333283  -0.000333333\n -0.000333333  -0.000333283      0.000333283   0.000333333\n -0.001        -0.000999848      0.000999848   0.001\n -0.00166667   -0.00166641   …   0.00166641    0.00166667\n\njulia> rxpos = [\n  0.0  0.0  0.5  0.5\n  0.0  0.5  0.0  0.5\n  0.0  0.0  0.0  0.0\n];\njulia> θ = deg2rad.(reduce(vcat, hcat.(LinRange(-20,20,41)', LinRange(-10,10,21)))) # 2D array with (azimuth, elevation) in each row\njulia> steering(rxpos, 1500.0, θ)\n4×861 Array{Float64,2}:\n  9.80987e-5    9.83857e-5    9.86427e-5  …   0.00021154   0.000210989   0.000210373\n  0.000210373   0.000210989   0.00021154      9.86427e-5   9.83857e-5    9.80987e-5\n -0.000210373  -0.000210989  -0.00021154     -9.86427e-5  -9.83857e-5   -9.80987e-5\n -9.80987e-5   -9.83857e-5   -9.86427e-5     -0.00021154  -0.000210989  -0.000210373\n\n\n\n\n\n","category":"method"},{"location":"plot.html#Plot-recipes-1","page":"Plot recipes","title":"Plot recipes","text":"","category":"section"},{"location":"plot.html#","page":"Plot recipes","title":"Plot recipes","text":"Plot recipes are enabled by importing Plots:","category":"page"},{"location":"plot.html#","page":"Plot recipes","title":"Plot recipes","text":"using Plots","category":"page"},{"location":"plot.html#","page":"Plot recipes","title":"Plot recipes","text":"We provide a plot recipe to display signals:","category":"page"},{"location":"plot.html#","page":"Plot recipes","title":"Plot recipes","text":"plot(data::SampleBuf; t0=0.0, downsample=:auto, pooling=:auto, kwargs...)","category":"page"},{"location":"plot.html#","page":"Plot recipes","title":"Plot recipes","text":"Optional arguments:","category":"page"},{"location":"plot.html#","page":"Plot recipes","title":"Plot recipes","text":"t0=0.0: start time (for labeling only)\ndownsample=:auto: downsampling factor (integer or :auto)\npooling=:auto: pooling mode (:auto, :min, :max, :mean, :minmax, nothing or function)","category":"page"},{"location":"plot.html#","page":"Plot recipes","title":"Plot recipes","text":"If the signal is too long, it is automatically downsampled in a perceptually meaningful way. The downsampling can be controlled using the downsample and pooling keywords.","category":"page"},{"location":"plot.html#","page":"Plot recipes","title":"Plot recipes","text":"We also provide convenience plot recipes for common signal processing plots:","category":"page"},{"location":"plot.html#","page":"Plot recipes","title":"Plot recipes","text":"psd\nspecgram\nfreqresp","category":"page"},{"location":"plot.html#SignalAnalysis.psd","page":"Plot recipes","title":"SignalAnalysis.psd","text":"psd(data; kwargs...)\n\nPlots the power spectral density of data.\n\nOptional keyword arguments\n\nfs=1.0: derived from the data if a SampleBuf is provided as input\nnfft=512: size of FFT window\nnoverlap=nfft÷2: window overlap size\nwindow=hamming(nfft): accepts any window from DSP.jl\nxscale=:auto: one of :auto, :identity or :log10\nother kwargs are passed on to plot\n\n\n\n\n\n","category":"function"},{"location":"plot.html#SignalAnalysis.specgram","page":"Plot recipes","title":"SignalAnalysis.specgram","text":"specgram(data; kwargs...)\n\nPlots a spectrogram of the data.\n\nOptional keyword arguments\n\nfs=1.0: derived from the data if a SampleBuf is provided as input\nnfft=256: size of FFT window\nnoverlap=nfft÷2: window overlap size\nwindow=hamming(nfft): accepts any window from DSP.jl\nt0=0.0: start time\ndownsample=:auto: downsampling factor (integer) for time axis\npooling=:mean: pooling mode (:min, :max, :mean, nothing or function)\nother kwargs are passed on to plot\n\n\n\n\n\n","category":"function"},{"location":"plot.html#SignalAnalysis.freqresp","page":"Plot recipes","title":"SignalAnalysis.freqresp","text":"freqresp(filter; kwargs...)\nfreqresp(num; kwargs...)\nfreqresp(num, den; kwargs...)\n\nPlots frequency response of a digital filter.\n\nOptional keyword arguments\n\nfs=1.0: sampling frequency\nnfreq=256: number of frequency points to evaluate filter response at\nxscale=:auto: one of :auto, :identity or :log10\nother kwargs are passed on to plot\n\n\n\n\n\n","category":"function"},{"location":"signals.html#Creating-and-managing-signals-1","page":"Creating & managing signals","title":"Creating & managing signals","text":"","category":"section"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"Signals are represented by array-like data types with a series (time, frequency or space domain) per column. The SampleBuf data type wraps an array and carries sampling rate as metadata with it. This allows the API to be used without having to specify sampling rate at each call. However, if a user prefers to use other array-like data types, the sampling rate may be provided as a fs keyword argument for API calls that require sampling rate.","category":"page"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"All code examples in this manual assume you have imported SignalAnalysis and SignalAnalysis.Units:","category":"page"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"using SignalAnalysis, SignalAnalysis.Units","category":"page"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"The SignalAnalysis.Units package re-exports commonly used units (s, ms, Hz, kHz, etc) from Unitful.jl.","category":"page"},{"location":"signals.html#Creating-and-wrapping-signals-1","page":"Creating & managing signals","title":"Creating and wrapping signals","text":"","category":"section"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"Signals wrapped in a SampleBuf data type may be easily created using signal():","category":"page"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"x = signal(data, fs)","category":"page"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"Properties such as frame rate (sampling rate), number of channels, etc may be accessed using the SignalBase API. The signals can be treated as arrays, but carry sampling rate metadata with them. While most operations infer metadata from the input signal, some operations may be unable to automatically infer the frame rate of the output signal. In such cases, the @rate and @samerateas macros prove handy:","category":"page"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"# create a 1-second signal sampled at 20 kHz\ny = @rate 20kHz randn(20000)\n\n# use DSP.filt() to filter a signal and set output signal sampling rate to be\n# the same as y\ny = @samerateas y filt(lpf, y)    \n\n# use DSP.resample() to resample a signal and set output signal sampling rate\n# to be 2/3 that of y\ny = @samerateas 2//3 y resample(y, 2//3)","category":"page"},{"location":"signals.html#Processing-signals-block-by-block-1","page":"Creating & managing signals","title":"Processing signals block-by-block","text":"","category":"section"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"When processing long signals, it is common to break the signal into blocks, process each block, and collect the results. To simplify this, we have slide() to slide a window along the data, and call a function on each window:","category":"page"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"slide(f::Function, s::AbstractVector, nframes, overlap=0, args...; showprogress=true)","category":"page"},{"location":"signals.html#SignalAnalysis.slide","page":"Creating & managing signals","title":"SignalAnalysis.slide","text":"slide(f::Function, s::AbstractVector, nframes, overlap=0, args...; showprogress=true)\n\nSlides a window over a signal, processing each window. If the total number of frames in the signal is not an integral multiple of nframes, the last incomplete block of samples remains unprocessed.\n\nThe processing function receives a view on the original signal, and therefore may modify the signal if desired.\n\nExamples:\n\njulia> x = signal(ones(1000), 8kHz);\njulia> slide(x, 250) do x1, blknum, firstframe\n         println(size(x1), \", \", blknum, \", \", firstframe)\n       end\n(250,), 1, 1\n(250,), 2, 251\n(250,), 3, 501\n(250,), 4, 751\n\njulia> slide(x, 250) do x1, blknum, firstframe\n         x1 .= blknum\n       end\n\njulia> x[1], x[251], x[501], x[751]\n(1.0, 2.0, 3.0, 4.0)\n\n\n\n\n\n","category":"function"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"The function f is called for each block with 3 arguments:","category":"page"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"x: windowed view of the original array\nblknum: block number\nfirstframe: frame number of the first frame in the window","category":"page"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"The results can be optionally collated by providing the return data type as the second argument of slide():","category":"page"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"slide(f::Function, ::Type{T}, s::AbstractVector, nframes, overlap=0, args...; showprogress=true) where T","category":"page"},{"location":"signals.html#SignalAnalysis.slide-Union{Tuple{T}, Tuple{Function,Type{T},AbstractArray{T,1} where T,Any}, Tuple{Function,Type{T},AbstractArray{T,1} where T,Any,Any,Vararg{Any,N} where N}} where T","page":"Creating & managing signals","title":"SignalAnalysis.slide","text":"slide(f::Function, ::Type{T}, s::AbstractVector, nframes, overlap=0, args...; showprogress=true) where T\n\nSlides a window over a signal, processing each window, and collecting the results of type T. If the total number of frames in the signal is not an integral multiple of nframes, the last incomplete block of samples remains unprocessed.\n\nExamples:\n\njulia> x = signal(ones(1000), 8kHz);\njulia> slide(Float32, x, 250) do x1, blknum, firstframe\n         sum(x1)*blknum\n       end\n4-element Array{Float32,1}:\n  250.0\n  500.0\n  750.0\n 1000.0\n\njulia> slide(Tuple{Int,Float64}, x, 250) do x1, blknum, firstframe\n          (blknum, sum(x1)*blknum)\n        end\n4-element Array{Tuple{Int64,Float64},1}:\n  (1, 250.0)\n  (2, 500.0)\n  (3, 750.0)\n  (4, 1000.0)\n\n\n\n\n\n","category":"method"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"Blocks may optionally also be overlapped by specifying noverlap. Any extra arguments to slide() are passed on to the f function. An optional keyword argument showprogress is useful in long running operations to automatically show a progress bar.","category":"page"},{"location":"signals.html#API-reference-1","page":"Creating & managing signals","title":"API reference","text":"","category":"section"},{"location":"signals.html#","page":"Creating & managing signals","title":"Creating & managing signals","text":"Modules = [SignalAnalysis]\nPages   = [\"signals.jl\"]","category":"page"},{"location":"signals.html#SignalAnalysis.analytic-Tuple{SampledSignals.SampleBuf}","page":"Creating & managing signals","title":"SignalAnalysis.analytic","text":"analytic(s)\n\n\nConverts a signal to analytic representation.\n\n\n\n\n\n","category":"method"},{"location":"signals.html#SignalAnalysis.isanalytic-Tuple{Any}","page":"Creating & managing signals","title":"SignalAnalysis.isanalytic","text":"isanalytic(s)\n\n\nChecks if a signal is analytic.\n\n\n\n\n\n","category":"method"},{"location":"signals.html#SignalAnalysis.padded-Union{Tuple{N}, Tuple{T}, Tuple{AbstractArray{T,1},Any}} where N where T","page":"Creating & managing signals","title":"SignalAnalysis.padded","text":"padded(s, padding; delay, fill)\n\n\nGenerates a padded view of a signal with optional delay/advance.\n\n\n\n\n\n","category":"method"},{"location":"signals.html#SignalAnalysis.samples-Tuple{SampledSignals.SampleBuf}","page":"Creating & managing signals","title":"SignalAnalysis.samples","text":"samples(s)\n\n\nGets the underlying samples in the signal.\n\n\n\n\n\n","category":"method"},{"location":"signals.html#SignalAnalysis.signal-Tuple{AbstractArray,Any}","page":"Creating & managing signals","title":"SignalAnalysis.signal","text":"signal(x, fs)\n\n\nCreates a signal with frame rate fs.\n\n\n\n\n\n","category":"method"},{"location":"signals.html#SignalAnalysis.signal-Tuple{SampledSignals.SampleBuf,Any}","page":"Creating & managing signals","title":"SignalAnalysis.signal","text":"signal(x, fs)\n\n\nCreates a signal with frame rate fs. If the original signal's frame rate is the same as fs, this method simply returns the original signal. Otherwise, it creates a new signal with the specified frame rate and data from the original signal. Do note that this method does not resample the signal.\n\n\n\n\n\n","category":"method"},{"location":"signals.html#SignalAnalysis.slide","page":"Creating & managing signals","title":"SignalAnalysis.slide","text":"slide(f::Function, s::AbstractVector, nframes, overlap=0, args...; showprogress=true)\n\nSlides a window over a signal, processing each window. If the total number of frames in the signal is not an integral multiple of nframes, the last incomplete block of samples remains unprocessed.\n\nThe processing function receives a view on the original signal, and therefore may modify the signal if desired.\n\nExamples:\n\njulia> x = signal(ones(1000), 8kHz);\njulia> slide(x, 250) do x1, blknum, firstframe\n         println(size(x1), \", \", blknum, \", \", firstframe)\n       end\n(250,), 1, 1\n(250,), 2, 251\n(250,), 3, 501\n(250,), 4, 751\n\njulia> slide(x, 250) do x1, blknum, firstframe\n         x1 .= blknum\n       end\n\njulia> x[1], x[251], x[501], x[751]\n(1.0, 2.0, 3.0, 4.0)\n\n\n\n\n\n","category":"function"},{"location":"signals.html#SignalAnalysis.slide-Union{Tuple{T}, Tuple{Function,Type{Array{T,N} where N},Int64,Union{AbstractArray{T,1}, AbstractArray{T,2}} where T,Any}, Tuple{Function,Type{Array{T,N} where N},Int64,Union{AbstractArray{T,1}, AbstractArray{T,2}} where T,Any,Any,Vararg{Any,N} where N}} where T","page":"Creating & managing signals","title":"SignalAnalysis.slide","text":"slide(f::Function, ::Type{Array{T}}, noutput::Int, s::AbstractVector, nframes, overlap=0, args...; showprogress=true) where T\n\nSlides a window over a signal, processing each window, and collecting the results of type Array{T} of length noutput. If the total number of frames in the signal is not an integral multiple of nframes, the last incomplete block of samples remains unprocessed.\n\nExamples:\n\njulia> x = signal(ones(1000), 8kHz);\njulia> slide(Array{Float64}, 2, x, 250) do x1, blknum, firstframe\n          [sum(x1), prod(x1)]\n       end\n4×2 Array{Float64,2}:\n 250.0  1.0\n 250.0  1.0\n 250.0  1.0\n 250.0  1.0\n\n\n\n\n\n","category":"method"},{"location":"signals.html#SignalAnalysis.slide-Union{Tuple{T}, Tuple{Function,Type{T},Union{AbstractArray{T,1}, AbstractArray{T,2}} where T,Any}, Tuple{Function,Type{T},Union{AbstractArray{T,1}, AbstractArray{T,2}} where T,Any,Any,Vararg{Any,N} where N}} where T","page":"Creating & managing signals","title":"SignalAnalysis.slide","text":"slide(f::Function, ::Type{T}, s::AbstractVector, nframes, overlap=0, args...; showprogress=true) where T\n\nSlides a window over a signal, processing each window, and collecting the results of type T. If the total number of frames in the signal is not an integral multiple of nframes, the last incomplete block of samples remains unprocessed.\n\nExamples:\n\njulia> x = signal(ones(1000), 8kHz);\njulia> slide(Float32, x, 250) do x1, blknum, firstframe\n         sum(x1)*blknum\n       end\n4-element Array{Float32,1}:\n  250.0\n  500.0\n  750.0\n 1000.0\n\njulia> slide(Tuple{Int,Float64}, x, 250) do x1, blknum, firstframe\n          (blknum, sum(x1)*blknum)\n        end\n4-element Array{Tuple{Int64,Float64},1}:\n  (1, 250.0)\n  (2, 500.0)\n  (3, 750.0)\n  (4, 1000.0)\n\n\n\n\n\n","category":"method"},{"location":"signals.html#SignalAnalysis.toframe-Tuple{Any,SampledSignals.SampleBuf}","page":"Creating & managing signals","title":"SignalAnalysis.toframe","text":"toframe(t, s)\n\n\nConverts time to signal frame number.\n\nExamples:\n\njulia> x = signal(randn(2000), 8kHz);\njulia> toframe(0.2s, x)\n1601\n\njulia> toframe([0.2s, 201ms], x)\n2-element Array{Int64,1}:\n 1601\n 1609\n\njulia> toframe(0.2:0.01:0.3, x)\n 11-element Array{Int64,1}:\n  1601\n  1681\n  1761\n   ⋮\n\n\n\n\n\n","category":"method"},{"location":"signals.html#SignalAnalysis.@rate-Tuple{Any,Any}","page":"Creating & managing signals","title":"SignalAnalysis.@rate","text":"@rate fs expr\n\nCreates a signal from expr with frame rate fs. It provides syntactic sugar on the signal method.\n\nExample:\n\njulia> x = @rate 44.1kHz randn(44100)\n44100-frame, 1-channel SampleBuf{Float64, 1}\n1.0s sampled at 44100.0Hz\n\n\n\n\n\n","category":"macro"},{"location":"signals.html#SignalAnalysis.@samerateas-Tuple{Any,Any,Any}","page":"Creating & managing signals","title":"SignalAnalysis.@samerateas","text":"@samerateas n x expr\n\nCreates a signal from expr with the a frame rate n times that of signal x.\n\nExamples:\n\njulia> x = @rate 44.1kHz randn(44100)\n44100-frame, 1-channel SampleBuf{Float64, 1}\n1.0s sampled at 44100.0Hz\n\njulia> y = @samerateas 1//2 x x[1:2:end]\n22050-frame, 1-channel SampleBuf{Float64, 1}\n1.0s sampled at 22050.0Hz\n\njulia> using DSP\njulia> y = @samerateas 2//3 x resample(x, 2//3)\n29400-frame, 1-channel SampleBuf{Float64, 1}\n1.0s sampled at 29400.0Hz\n\n\n\n\n\n","category":"macro"},{"location":"signals.html#SignalAnalysis.@samerateas-Tuple{Any,Any}","page":"Creating & managing signals","title":"SignalAnalysis.@samerateas","text":"@samerateas x expr\n\nCreates a signal from expr with the same frame rate as signal x. This is useful to preserve frame rate metadata across functions that do not return a signal.\n\nExamples:\n\njulia> x = @rate 44.1kHz randn(44100)\n44100-frame, 1-channel SampleBuf{Float64, 1}\n1.0s sampled at 44100.0Hz\n\njulia> using DSP\njulia> y = filt([1.0,0.5], x)     # frame rate stripped by DSP.filt\n44100-element Array{Float64,1}:\n   ⋮\n\njulia> y = @samerateas x filt([1.0,0.5], x)\n44100-frame, 1-channel SampleBuf{Float64, 1}\n1.0s sampled at 44100.0Hz\n\n\n\n\n\n","category":"macro"},{"location":"signals.html#Base.getindex-Tuple{AbstractArray{T,1} where T,Any,typeof(∘)}","page":"Creating & managing signals","title":"Base.getindex","text":"x[a:b,∘]\n\nGenerates a view of specified row range a:b of a vector or matrix x.\n\n\n\n\n\n","category":"method"},{"location":"dsp.html#Signal-processing-1","page":"Signal processing","title":"Signal processing","text":"","category":"section"},{"location":"dsp.html#","page":"Signal processing","title":"Signal processing","text":"Modules = [SignalAnalysis]\nPages   = [\"dsp.jl\"]","category":"page"},{"location":"dsp.html#SignalAnalysis.circconv","page":"Signal processing","title":"SignalAnalysis.circconv","text":"circconv(x)\ncircconv(x, y)\n\n\nComputes the circular convolution of x and y. Both vectors must be the same length.\n\n\n\n\n\n","category":"function"},{"location":"dsp.html#SignalAnalysis.demon-Tuple{Any}","page":"Signal processing","title":"SignalAnalysis.demon","text":"demon(x; fs, downsample, method, cutoff)\n\n\nEstimates DEMON spectrum. The output is highpass filtered with a cutoff frequency and downsampled. Supported downsampling methods are :rms (default), :mean and :fir.\n\n\n\n\n\n","category":"method"},{"location":"dsp.html#SignalAnalysis.downconvert","page":"Signal processing","title":"SignalAnalysis.downconvert","text":"downconvert(s, sps, fc)\ndownconvert(s, sps, fc, pulseshape; fs)\n\n\nConverts passband signal centered around carrier frequency fc to baseband, and downsamples it by a factor of sps. If the pulseshape is specified to be nothing, downsampling is performed without filtering.\n\n\n\n\n\n","category":"function"},{"location":"dsp.html#SignalAnalysis.fir","page":"Signal processing","title":"SignalAnalysis.fir","text":"fir(n, f1)\nfir(n, f1, f2; fs, method)\n\n\nDesigns a n-tap FIR filter with a passband from f1 to f2 using the specified method. If frame rate fs is not specified, f1 and f2 are given in normalized units (1.0 being Nyquist). If f1 is 0, the designed filter is a lowpass filter, and if f2 is nothing then it is a highpass filter.\n\nThis method is a convenience wrapper around DSP.digitalfilter.\n\nExamples:\n\njulia> lpf = fir(127, 0, 10kHz; fs=44.1kHz)   # design a lowpass filter\n127-element Array{Float64,1}:\n  ⋮\n\njulia> hpf = fir(127, 10kHz; fs=44.1kHz)      # design a highpass filter\n127-element Array{Float64,1}:\n  ⋮\n\njulia> bpf = fir(127, 1kHz, 5kHz; fs=44.1kHz) # design a bandpass filter\n127-element Array{Float64,1}:\n  ⋮\n\n\n\n\n\n","category":"function"},{"location":"dsp.html#SignalAnalysis.gmseq","page":"Signal processing","title":"SignalAnalysis.gmseq","text":"gmseq(m)\ngmseq(m, θ)\n\n\nGenerates an generalized m-sequence of length 2^m-1 or tap specification m.\n\nGeneralized m-sequences are related to m-sequences but have an additional parameter θ. When θ = π/2, generalized m-sequences become normal m-sequences. When θ < π/2, generalized m-sequences contain a DC-component that leads to an exalted carrier after modulation. When θ is atan(√(2^m-1)), the m-sequence is considered to be period matched. Period matched m-sequences are complex sequences with perfect discrete periodic auto-correlation properties, i.e., all non-zero lag periodic auto-correlations are zero. The zero-lag autocorrelation is 2^m-1, where m is the shift register length.\n\nThis function currently supports shift register lengths between 2 and 30.\n\nExamples:\n\njulia> x = gmseq(3)         # generate period matched m-sequence\n7-element Array{Complex{Float64},1}:\n 0.3535533905932738 + 0.9354143466934853im\n 0.3535533905932738 + 0.9354143466934853im\n 0.3535533905932738 + 0.9354143466934853im\n 0.3535533905932738 - 0.9354143466934853im\n 0.3535533905932738 + 0.9354143466934853im\n 0.3535533905932738 - 0.9354143466934853im\n 0.3535533905932738 - 0.9354143466934853im\n\njulia> x = gmseq(3, π/4)    # generate m-sequence with exalted carrier\n7-element Array{Complex{Float64},1}:\n 0.7071067811865476 + 0.7071067811865475im\n 0.7071067811865476 + 0.7071067811865475im\n 0.7071067811865476 + 0.7071067811865475im\n 0.7071067811865476 - 0.7071067811865475im\n 0.7071067811865476 + 0.7071067811865475im\n 0.7071067811865476 - 0.7071067811865475im\n 0.7071067811865476 - 0.7071067811865475im\n\n\n\n\n\n","category":"function"},{"location":"dsp.html#SignalAnalysis.goertzel-Tuple{AbstractArray{T,1} where T,Any,Any}","page":"Signal processing","title":"SignalAnalysis.goertzel","text":"goertzel(x, f, n; fs)\n\n\nDetects frequency f in input signal using the Goertzel algorithm.\n\nThe detection metric returned by this function is the complex output of the Goertzel filter at the end of the input block. Typically, you would want to compare the magnitude of this output with a threshold to detect a frequency.\n\nWhen a block size n is specified, the Goertzel algorithm in applied to blocks of data from the original time series.\n\n\n\n\n\n","category":"method"},{"location":"dsp.html#SignalAnalysis.mseq","page":"Signal processing","title":"SignalAnalysis.mseq","text":"mseq(m)\nmseq(m, θ)\n\n\nGenerates an m-sequence of length 2^m-1 or tap specification m.\n\nm-sequences are sequences of +1/-1 values with near-perfect discrete periodic auto-correlation properties. All non-zero lag periodic auto-correlations are -1. The zero-lag autocorrelation is 2^m-1, where m is the shift register length.\n\nThis function currently supports shift register lengths between 2 and 30.\n\nExamples:\n\njulia> x = mseq(3)                  # generate regular m-sequence\n7-element Array{Float64,1}:\n  1.0\n  1.0\n  1.0\n -1.0\n  1.0\n -1.0\n -1.0\n\njulia> x = mseq((1,3))              # generate m-sequence with specification (1,3)\n7-element Array{Float64,1}:\n  1.0\n  1.0\n  1.0\n -1.0\n  1.0\n -1.0\n -1.0\n\n\n\n\n\n","category":"function"},{"location":"dsp.html#SignalAnalysis.pll","page":"Signal processing","title":"SignalAnalysis.pll","text":"pll(x)\npll(x, bandwidth; fs)\n\n\nPhased-lock loop to track dominant carrier frequency in input signal.\n\n\n\n\n\n","category":"function"},{"location":"dsp.html#SignalAnalysis.rcosfir","page":"Signal processing","title":"SignalAnalysis.rcosfir","text":"rcosfir(β, sps)\nrcosfir(β, sps, span)\n\n\nRaised cosine filter.\n\n\n\n\n\n","category":"function"},{"location":"dsp.html#SignalAnalysis.removedc!-Tuple{Any}","page":"Signal processing","title":"SignalAnalysis.removedc!","text":"removedc!(s; α)\n\n\nDC removal filter. Parameter α controls the cutoff frequency. Implementation based on Lyons 2011 (3rd ed) real-time DC removal filter in Fig. 13-62(d).\n\nSee also: removedc\n\n\n\n\n\n","category":"method"},{"location":"dsp.html#SignalAnalysis.removedc-Tuple{Any}","page":"Signal processing","title":"SignalAnalysis.removedc","text":"removedc(s; α)\n\n\nDC removal filter. Parameter α controls the cutoff frequency. Implementation based on Lyons 2011 (3rd ed) real-time DC removal filter in Fig. 13-62(d).\n\nSee also: removedc!\n\n\n\n\n\n","category":"method"},{"location":"dsp.html#SignalAnalysis.rrcosfir","page":"Signal processing","title":"SignalAnalysis.rrcosfir","text":"rrcosfir(β, sps)\nrrcosfir(β, sps, span)\n\n\nRoot-raised cosine filter.\n\n\n\n\n\n","category":"function"},{"location":"dsp.html#SignalAnalysis.upconvert","page":"Signal processing","title":"SignalAnalysis.upconvert","text":"upconvert(s, sps, fc)\nupconvert(s, sps, fc, pulseshape; fs)\n\n\nConverts baseband signal with sps symbols per passband sample to a real passband signal centered around carrier frequency fc.\n\n\n\n\n\n","category":"function"},{"location":"index.html#SignalAnalysis.jl-1","page":"Home","title":"SignalAnalysis.jl","text":"","category":"section"},{"location":"index.html#Signal-analysis-toolbox-for-Julia-1","page":"Home","title":"Signal analysis toolbox for Julia","text":"","category":"section"},{"location":"index.html#","page":"Home","title":"Home","text":"CurrentModule = SignalAnalysis","category":"page"},{"location":"index.html#","page":"Home","title":"Home","text":"While a few great signal processing packages (e.g. DSP.jl, SignalOperators.jl) are available, they have limited time-frequency analysis, sonar analysis, and baseband analysis capabilities. This SignalAnalysis.jl package aims to fill that gap. The package has grown out of my research needs, but I hope to expand it over time to provide a wide variety of time-frequency analysis, and baseband signal processing tools.","category":"page"},{"location":"index.html#","page":"Home","title":"Home","text":"While this package works with most array-like data types, it uses the SignalBase.jl API to represent multichannel 1D signals (time, frequency or spatial domain). While the package adopts the SampleBuf data type from the SampledSignals.jl package to carry sampling rate information with the sampled signal, the API design allows sampling rate to be provided as a keyword argument in most cases, enabling the user to pass in any array-like data.","category":"page"},{"location":"index.html#APIs-1","page":"Home","title":"APIs","text":"","category":"section"},{"location":"index.html#","page":"Home","title":"Home","text":"Creating & managing signals\nGenerating signals\nBasic signal analysis\nSignal processing\nArray signal processing\nRandom noise generation\nPlot recipes\nInteractive plotting","category":"page"},{"location":"index.html#Quick-links-1","page":"Home","title":"Quick links","text":"","category":"section"},{"location":"index.html#","page":"Home","title":"Home","text":"SignalAnalysis.jl\nSignalBase.jl\nSampledSignals.jl\nDSP.jl\nPlots.jl\nUnitful.jl","category":"page"},{"location":"rand.html#Random-noise-generation-1","page":"Random noise generation","title":"Random noise generation","text":"","category":"section"},{"location":"rand.html#","page":"Random noise generation","title":"Random noise generation","text":"PinkGaussian\nRedGaussian","category":"page"},{"location":"rand.html#SignalAnalysis.PinkGaussian","page":"Random noise generation","title":"SignalAnalysis.PinkGaussian","text":"struct PinkGaussian{T} <: Distributions.Distribution{Distributions.Multivariate,Distributions.Continuous}\n\nPink Gaussian noise distribution for random variate generation.\n\nExample:\n\njulia> rand(PinkGaussian(1000))\n1000-element Array{Float64,1}:\n   ⋮\n\njulia> rand(PinkGaussian(1000, 2.0))\n1000-element Array{Float64,1}:\n   ⋮\n\n\n\n\n\n","category":"type"},{"location":"rand.html#SignalAnalysis.RedGaussian","page":"Random noise generation","title":"SignalAnalysis.RedGaussian","text":"struct RedGaussian{T} <: Distributions.Distribution{Distributions.Multivariate,Distributions.Continuous}\n\nRed Gaussian noise distribution for random variate generation.\n\nExample:\n\njulia> rand(RedGaussian(1000))\n1000-element Array{Float64,1}:\n   ⋮\n\njulia> rand(RedGaussian(1000, 2.0))\n1000-element Array{Float64,1}:\n   ⋮\n\n\n\n\n\n","category":"type"}]
}
