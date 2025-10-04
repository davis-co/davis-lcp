class BPMS{
	wrapElement(instance){
		let _t = this;
		return new Proxy(instance, {
			get(target, prop, receiver) {
				if (prop === 'sV') {
					return function (...args) {
						target[prop](...args);
						//inject
						return _t.cBFOE(instance);
					};
				}else if (prop === 'cSFSDTS') {
					return function (...args) {
						let rs = target[prop](...args);
						//inject
						return (rs.status)?_t.manageForDBS(instance,rs.cb):rs;
					};
				}else if (prop === 'doIt' || prop === 'rA') {
					return function (...args) {
						let rs = target[prop](...args);
						//inject
						return (rs.status)?_t.lazy(instance,{data:{tip:'FL',qbc:instance.bc,oi:instance.oi,bc:rs.bc},l:rs.cb},{}):rs;
					};
				}
				return target[prop];
			}
		});
	}
	#_cp;
	#_cw;
	#_cf;
	#_application;
	#_mainSelector = '.main';
	get cp(){//currentProcess
		return this.#_cp
	}	
	get cf(){//currentForm
		return this.#_cf
	}	
	get cw(){//currentWizardar
		return this.#_cw
	}
	set application(application){
		this.#_application = application;
	}
	cBTVB(bsc){/*convertBscToValidBsc*/
		let bscTemp = []
		if(Array.isArray(bsc))
			for(let i in bsc)
				bscTemp.push(utils.decodeBase64(bsc[i]));
		else if(bsc)
			bscTemp.push(utils.decodeBase64(bsc));
		return bscTemp.length > 0 ? bscTemp : undefined;		
	}
	cE(exp){/*calculateExpresion*/
		let values = {};
		let t = (new Date().getTime()) / 60000;
		let f = this.#_cf.elements;
		let rs = true;
		for(let i=0; i < exp.length && rs; i++)
			try{
				rs = (rs && eval(exp[i]));
			}catch(e){rs=undefined;break;};
		return rs;
	}
	mXP(ForP){/*mXParameter*/
		ForP.firstJs = (ForP.firstJs) ? utils.parse(utils.decodeBase64(ForP.firstJs)) : null ;
		ForP.beforeImport = (ForP.beforeImport) ? utils.parse(utils.decodeBase64(ForP.beforeImport)) : null ;
		ForP.afterImport = (ForP.afterImport) ? utils.parse(utils.decodeBase64(ForP.afterImport)) : null ;
		ForP.firstCss = (ForP[processKey].firstCss) ? utils.decodeBase64(ForP.firstCss) : null;
	}
	importByEffect(effectId,contentSelector, callback, params){
		switch(effectId){
			case 1:
				$(contentSelector).html('');
				callback(params);
				break;
			case 2:
				$(contentSelector).transition({ opacity: 0 }).html('').transition({},function(){
					callback(params);
					}).transition({ opacity: 1 });
				break;
		}
	}
	constructor(){
	}
	start(){		
		for(let key in this.#_application){
			this.#_application[key] = utils.parse(utils.decodeBase64(this.#_application[key]));
			this.fpbc = this.#_application[key].x54;
			if(this.#_application[key].start)
				this.#_application[key].start = utils.parse(utils.decodeBase64(this.#_application[key].start));
		}
		this.goToProcess(this.fpbc,1);
	}
	getProcessFrame(){
		let uid = utils.id;		
		let mbmFrame = {
			frameSelector : 'div.mbmframe[uid="' + uid + '"]',
			mbmFrameForElement:'div.mbmframe[uid="' + uid + '"] div.mbmElementHolder'
		};
		let frame = $('<div p="' + this.#_cp.x0 + '" class="mbmframe grid col-12" uid="' + uid + '" ></div>');
		if(this.#_cp.x6)
			frame.css('background-image','url("' + this.#_cp.x6 + '")');
		frame.append($('<div class="mbmElementHolder grid col-12" uid="' + uid + '"></div>'));
		$(this.#_mainSelector).append(frame);
		return mbmFrame;
	}	
	goToProcess(pbc){
		let processKey = pbc.split('-')[pbc.split('-').length - 2];
		let ifProcessExist = (processKey)=>{			
			if(!this.#_cp && this.#_cp.x3 == 1)
				$(this.#_cp.mbmFrame.frameSelector).remove();			
			this.#_cp = this.#_application[processKey];
			this.#_cp.mainSelector = '.main';
			this.#_cp.mbmFrame = this.getProcessFrame();
			if(this.#_cp.prp)
				this.#_cp.prp.js(this.#_cp.prp.data);
			if(this.#_cp.afterImport)
				this.#_cp.afterImport();
			if(this.#_cp.firstCss)
				$(this.#_cp.mbmFrame.frameSelector).append('<style>' + this.#_cp.firstCss + '</style>');
			let formKey = 'start';
			let fbc = 'start';
			for(let key in this.#_cp)
				if(key.startsWith('xf') && this.#_cp[key]['x7'] == 1){
					fbc = this.#_cp[key]['x54'];
					formKey = key;
				}			
			if(this.#_cp.firstJs && !this.#_cp.firstJs())
				return;
			if(this.#_cp.afterImport)
				this.#_cp.afterImport();
			if(wbc == 'start')
				this.goToForm(wbc);
		};		
		if(!this.#_application[processKey])
			this.FP(pbc,ifProcessExist);
		else
			ifProcessExist(processKey);		
	}
	FP(pbc,ifProcessExist){		
		let processKey = pbc.split('-')[pbc.split('-').length - 2];
		let _t = this;
		var success = (data) =>{
			_t.#_application[processKey] = utils.parse(utils.decodeBase64(data[0][processKey]));
			$.extend(_t.#_application[processKey] , data[0].forms);
			_t.#_application[processKey].prp = data[0].prp;
			if(_t.#_application[processKey].prp)
				_t.#_application[processKey].prp.js = utils.parse(utils.decodeBase64(_t.#_application[processKey].prp.js));			
			if(_t.#_application[processKey].start)
				_t.#_application[processKey].start = utils.parse(utils.decodeBase64(_t.#_application[processKey].start));
			this.mXP(_t.#_application[processKey]);
			ifProcessExist(processKey);
		}		
		utils.sendRequest({appearSplash:true,disAppearSplash:true,url:'FP',success , data:{pbc:pbc}});
	}
	goToForm(fbc){
		let ifFormExist = (formKey) =>{
			this.#_cf = this.#_cp[formKey];
			let cb = (params)=>{
				let cb = (params)=>{
					$(this.#_cp.mbmFrame.holderSelector.mbmFrame.holderSelector).prop('f',formKey);	
					this.appendElementsToHolder(this.#_cp.run(),this.#_cp.mbmFrame.holderSelector);
				};
				if(this.#_cf.firstCss)
					$(this.#_cp.mbmFrame.holderSelector).append('<style>' + bpms.cf.firstCss + '</style>');
				if(this.#_cf.firstJs && !this.#_cf.firstJs())
					return;
				utils.loadResources(this.#_cf.firstResources,cb,{});
			};
			let effectId = (this.#_cf && this.#_cf.effectId) ? this.#_cf.effectId : 1;
			bpms.importByEffect( effectId , this.#_cp.mbmFrame.mbmFrameForElement, cb ,{});
			callback(formKey);//show all form in process
		};		
		if (fbc != 'start' && fbc != 'notExist'){
			this.FF(fbc,ifFormExist);
		}else{
			let formKey = fbc;
			ifFormExist(formKey);
		}				
	}
	FF(fbc,ifFormExist){
		let formKey = 'xf' + fbc.split('-')[fbc.split('-').length - 2];
		let success = function(data){
			let form = utils.parse(utils.decodeBase64(data[0][formKey]));
			form.originalElements = utils.parse(utils.decodeBase64(data[0][formKey])).elements;			
			let renderedAnswer = data[0]['newRenderedAnswer'];
			for(let k in renderedAnswer){
				form.elements[k].x3 = renderedAnswer[k];
				form.originalElements[k].x3 = renderedAnswer[k];
			}
			this.#_cp[formKey] = form;		
			for(let k in this.#_cp[formKey].elements){
				let el = this.#_cp[formKey].elements[k];
				if(el.x26 && el.x33){
					el.x33 = this.cBTVB(el.x33);
					if(!this.cE(el.x33))
						delete this.#_cp[formKey].elements[k];
				}else if(el.x33)
					delete this.#_cp[formKey].elements[k];
			}
			this.#_cp[formKey].prp = data[0].prp;
			if(this.#_cp[formKey].prp)
				this.#_cp[formKey].prp.js = utils.parse(utils.decodeBase64(this.#_cp[formKey].prp.js));
			this.mXP(this.#_cp[formKey]);
			this.#_cp[formKey] = bpms.FG(this.#_cp[formKey]);			
			ifFormExist(formKey);			
		}
		utils.sendRequest({appearSplash:true,disAppearSplash:true,url:'FF',success , data:{fbc:fbc}});
	}	
	FG(){		
		cf.elements = this.QG(cf.elements,cf);
		cf.run = function(){
			return cf.elements;
		};
		return cf;
	}
	QG(elementsJson,cf){
		let elements = {};
		for(let i in elementsJson){
			var arg = elementsJson[i];
			arg.x100 = cf.x54 + arg.x0 + '-';
			switch(arg.x2){
				case 1:
					elements[i] = new Int(arg);
					break;
				case 2:
					elements[i] = new ComputedValue(arg);
					break;
				case 3:
					elements[i] = new Text(arg);
					break;
				case 4:
					elements[i] = new DatePicker(arg);
					break;
				case 5:
					elements[i] = new GIS(arg);	
					break;
				case 6:
					elements[i] = new Button(arg);
					break;
				case 7:
					elements[i] = new Titr(arg);
					break;
				case 8:
					
					break;
				case 9:
					elements[i] = new Select(arg);
					break;
				case 10:
					elements[i] = new Radio(arg);
					break;
				case 11:
					elements[i] = new Suggestion(arg);
					break;
				case 12:
					break;
				case 13:
					elements[i] = new MultiSelect(arg);					
					break;
				case 14:
					elements[i] = new CheckBox(arg);					
					break;
					break;
				case 15:
					elements[i] = new MultiSuggestion(arg);
					break;
				case 16:
					break;
				case 17:
					elements[i] = new Video(arg);
					break;
				case 18:
					elements[i] = new Sound(arg);
					break;
				case 19:
					elements[i] = new Img(arg);
					break;
				case 20:
					elements[i] = new Book(arg);
					break;
				case 21:
					//arg.x100 = cf.x14;
					elements[i] = new Tree(arg);
					break;
				case 22:
					elements[i] = new MultiMediaPackage(arg);
					break;
				case 23:
					elements[i] = new Password(arg);
					break;
				case 24:
					elements[i] = new Flash(arg);
					break;
				case 25:
					elements[i] = new ColumnChart(arg);
					break;
				case 26:
					elements[i] = new GridView(arg);
					break;
				case 27:
					elements[i] = new PieChart(arg);
					break;
				case 28:
					elements[i] = new DonutChart(arg);
					break;
				case 29:
					elements[i] = new LineChart(arg);
					break;
				case 30:
					elements[i] = new ImageButton(arg);
					break;
				case 31:
					elements[i] = new BarChart(arg);
					break;
				case 32:
					elements[i] = new BarStack(arg);
					break;
				case 33:
					elements[i] = new AreaChart(arg);
					break;
				case 34:
					elements[i] = new gaugeChart(arg);
					break;
				case 35:
					elements[i] = new AreaChart(arg);
					break;
				case 36:
					elements[i] = new UCG(arg);
					break;
				case 37:
					elements[i] = new Line(arg);
					break;
				case 38:
					elements[i] = new SingleUploader(arg);
					break;
				case 39:
					elements[i] = new pyramid(arg);
					break;
				case 40:
					elements[i] = new notifyAlert(arg);
					break;
				case 41:
					elements[i] = new TextEditor(arg);
					break;
				case 43:
					elements[i] = new TimePicker(arg);
					break;
				case 44:
					elements[i] = new TextArea(arg);
					break;
				case 45:
					elements[i] = new ResultSet(arg);
					break;
				case 46:
					elements[i] = new GroupBox(arg);
					break;
				case 47:
					elements[i] = new FormTab(arg);
					break;
				case 49:
					elements[i] = new TextEditor2(arg);
					break;
				case 50:
					elements[i] = new rtccall(arg);
					break;	
				case 51:
					elements[i] = new chatViewer(arg);
					break;
				default:
					elements[i] = wrapElement(elements[i]);
			}
		}
		return elements;
	}
	lazy(_t,p,params){
		let n = function(){/*doLazy*/
			let success = function(res,params){
				let n = function(){/*afterLAzy*/
					if(_t.al)
						utils.parse(utils.decodeBase64(_t.al))(_t,p,params,res);
				};
				if(p.l)
					p.l(_t,p,params,res,n);
				else
					n();
			};
			let error = function(res,params){
				if(!f && _t.el)
						utils.parse(utils.decodeBase64(_t.el))(_t,p,params,res);
				else
					bpms.handleError(res,params);
			}
			let url = (p.url) ? p.url : 'FL';
			if(['FLDBS','DBS'].indexOf(url) != -1 && _t.dbsAjax)_t.dbsAjax.abort();
			_t.dbsAjax = utils.sendRequest({url:url , data:p.data , success:success,error:error},params);
		};		
		if(_t.bl)
			utils.parse(utils.decodeBase64(_t.bl))(_t,p,params,n);
		else
			n();
	}
	
	
	
	
	// ehtemalan in tabee bayad hazf beshe
	cBFOE(element){/*clearBeasetFilterOnElement*/		
		for(const [ek,elem] of Object.entries(this.cf.elements)){
			if(elem.bfo && elem.bfo.indexOf(element.oi.toString()) != -1)
				elem.cV();
		}		
	}
	manageForDBS(elem,cb,params){
		var l = function(_t,p,params,res,n){
			if(cb)cb(_t,p,res);
			for(var i in _t.eice){				
				var e = bpms.cf.elements[_t.eice[i]];
				if(e)e.cV();
			}
			var rO = bpms.manageRoOrDODBS(_t);
			bpms.broadcatToForm(bpms.cf.ogrid,rO);
			bpms.manageIoDBS(_t , res[0].oi);
			bpms.manageSubItemOfOption(_t);
			n();
		};		
		if([26,2,36,38].indexOf(elem.x2) == -1 && JSON.stringify(elem.lv) == JSON.stringify(elem.gV())){
			elem.iSTS(true);
			return;
		}
		elem.iSTS(false);
		elem.lv = elem.gV();		
		var data = {oi : elem.oi, ov : elem.gV(), qbc : elem.bc , tip:elem.tip,fl:elem.fl};
		if(params)
			$.extend( data, params );		
		bpms.lazy(elem,{url:elem.tip.toUpperCase() , data:data , l:l});
	}
	
	
		
	
	afterImport(hso,elements){
		var ho = (hso instanceof jQuery) ? hso : $(hso);
		var elemArray = (elements) ? elements : bpms.cf.elements;
		var offset = 6;		
		var setLabelSize = function (ho){
			var maxWidth = ho.find('label.mm_label[ls]').width();
			maxWidth = maxWidth || 0;
			if(!elements)
				ho.find('label.mm_label').each(function (){
					maxWidth = ($(this).getRealDimensions().width > maxWidth)? $(this).getRealDimensions().width : maxWidth;
				});
			ho.find('label.mm_label:not([ls])').each(function (){
				$(this).width(maxWidth + offset).attr('ls',true);				
			});
		};
		setLabelSize(ho);/*set label max size for all label */
		var gOOW = function(e,other){/*get Other Object Width*/
			var sB = 25;
			var gW = 27;
			var aW = 27;
			var otherWidth = other;
			otherWidth += (!e.g) ? 0 : 27;/*guideWidth*/;
			otherWidth += (!e.bsa) ? 0 : 27;/*archiveWidth*/;
			otherWidth += (!e.sendbox) ? 0 : 25;/*sendBox*/
			var mylblen = (e.label)?e.label.width():0;
			var lblWidth = mylblen + offset + otherWidth;
			lblWidth += 'px';
			return lblWidth;
		};		
		var c = function(ho){
			ho.find('span[type="radio"],span[type="checkbox"]').each(function (){
				if(!elemArray) return false;
				var e = $(this);
				var lblfy = elemArray['o' + e.attr('oi')];				
				var lblWidth = gOOW(lblfy,0);				
				lblfy.target.css('width','calc(100% - ' + lblWidth + ')');
				lblfy.cTID();				
			});
			var seg = ho.find('select[type="suggestion"],select[type="multisuggestion"]');
			var sel = ho.find('select[type="select"],select[type="multiselect"]');
			var sSS = function(){/*setSelectSize*/
				sel.each(function(){/*create Select2*/
					var e = $(this);
					var sel = elemArray['o' + e.attr('oi')];
					var lblWidth = gOOW(sel,0);
					sel.cTID();				
					sel.target.data('select2').$container.css('width','calc(99% - ' + lblWidth + ')');
				});
				seg.each(function(){/*create Select2*/	
					var e = $(this);
					var sel = elemArray['o' + e.attr('oi')];
					var lblWidth = gOOW(sel,0);	
					sel.cTID();
					sel.target.data('select2').$container.css('width','calc(99% - ' + lblWidth + ')');		
				});
			}
			if(seg.length > 0 || sel.length > 0)
				utils.loadResources(['/LFFO/?fid=11129&t=js','/LFFO/?fid=11145&t=css',],sSS);
			ho.find('input[type="password"][target="true"],input[type="text"][target="true"],input[type="int"][target="true"],textarea[target="true"],button[type="button"][target="true"]').each(function(){/*create fix size of Target*/
				var e = $(this);
				var inp = elemArray['o' + e.attr('oi')];
				var lblWidth = gOOW(inp,0);
				e.css('width','calc(99.5% - ' + lblWidth + ')');
				
			});
			ho.find('audio[type="sound"][target="true"],video[type="video"][target="true"],embed[type="application/pdf"][target="true"],img[type="img"][target="true"]').each(function(){/*create fix size of MultiMedia*/
				var e = $(this);
				var mlm = elemArray['o' + e.attr('oi')];
				var lblWidth = gOOW(mlm,0);
				var o = elemArray['o' + e.attr('oi')];			
				o.target.css('width','calc(98.5% - ' + lblWidth + ')');
			});
			ho.find('input[type="datepicker"][target="true"]').each(function(){/*create fix size of datepicker*/
				var e = $(this);
				var dt = elemArray['o' + e.attr('oi')];				
				var widthOfImg = 33;
				var lblWidth = gOOW(dt,widthOfImg);
				e.css('width','calc(98.5% - ' + lblWidth + ')');
				dt.cTID();
			});
			ho.find('input[type="guc"][target="true"]').each(function(){/*create fix size of guc*/
				var e = $(this);
				var guc = elemArray['o' + e.attr('oi')];
				var widthOfImg = 27;
				var lblWidth = gOOW(guc,widthOfImg);
				e.css('width','calc(99.5% - ' + lblWidth + ')');
				guc.cTID();
			});
			ho.find('input[type="computedvalue"][target="true"]').each(function(){/*create fix size of computedvalue*/
				var e = $(this);
				var cv = elemArray['o' + e.attr('oi')];
				var widthOfImg = 28;
				var lblWidth = gOOW(cv,widthOfImg);
				e.css('width','calc(99.5% - ' + lblWidth + ')');
				cv.cTID();
			});
			ho.find('div[type="multimediapackage"][target="true"]').each(function(){/*create fix size of multimediapackage*/
				var e = $(this);
				var mmp = elemArray['o' + e.attr('oi')];		
				var lblWidth = gOOW(mmp,0);
				mmp.mmph.css('width','calc(98.5% - ' + lblWidth + ')');
				mmp.cTID();
			});
			var gi = ho.find('div[type="gis"][target="true"]');
			var sGS = function(){/*set GIS size*/
				gi.each(function(){/*create and fix size gis */
					var e = $(this);
					var gis = elemArray['o' + e.attr('oi')];
					var lblWidth = gOOW(gis,0);
					gis.btn.css('width','calc(98.5% - ' + lblWidth + ')');
					gis.cTID();
				});
			}
			if(gi.length > 0)
				utils.loadResources(['/LFFO/?fid=11128&t=js','/LFFO/?fid=11149&t=css'],sGS);
			ho.find('div[type="formtab"][target="true"]').each(function(){
				var e = $(this);
				var formtab = elemArray['o' + e.attr('oi')];
				var lblWidth = gOOW(formtab,0);
				formtab.target.css('width','calc(100% - ' + lblWidth + ')');
			});
			ho.find('div[type="tree"][target="true"]').each(function(){
				var e = $(this);
				var tree = elemArray['o' + e.attr('oi')];
				var lblWidth = gOOW(tree,0);
				tree.btn.css('width','calc(98.5% - ' + lblWidth + ')');			
			});
			ho.find('div[type="gridview"][target="true"]').each(function(){
				var e = $(this);
				var gridview = elemArray['o' + e.attr('oi')];
				var lblWidth = gOOW(gridview,0);
				gridview.btn.css('width','calc(99.5% - ' + lblWidth + ')');		
			});
			ho.find('span[type="imagebutton"][target="true"]').each(function(){
				var e = $(this);
				var imgbtn = elemArray['o' + e.attr('oi')];
				var lblWidth = gOOW(imgbtn,0);
				imgbtn.target.css('width','calc(98.5% - ' + lblWidth + ')');			
			});
			ho.find('span[type="resultset"][target="true"]').each(function(){
				var e = $(this);
				var rset = elemArray['o' + e.attr('oi')];
				var lblWidth = gOOW(rset,0);
				rset.target.css('width','calc(98.5% - ' + lblWidth + ')');			
			});
			ho.find('div[type="uploader"][target="true"]').each(function(){
				var e = $(this);
				var uploader = elemArray['o' + e.attr('oi')];
				var lblWidth = gOOW(uploader,0);
				uploader.cTIDF();
				uploader.captchHolder.css('width','calc(98.5% - ' + lblWidth + ')');			
				uploader.target.css('width','calc(99.3% - ' + lblWidth + ')');			
				uploader.btnHolder.css('width','calc(98.5% - ' + lblWidth + ')');			
			});			
			var hChart = ho.find('div[type="chart"][target="true"]');
			var sHs = function(){/*set highChart size*/
				hChart.each(function(){/*create and fix size highChart */
					var e = $(this);
					var chart = elemArray['o' + e.attr('oi')];
					var lblWidth = gOOW(chart,0);
					if(chart.btn)
						chart.btn.css('width','calc(98.5% - ' + lblWidth + ')');
					else{
						chart.target.css('width','calc(98.5% - ' + lblWidth + ')');						
					}
				});
			}
			if(hChart.length > 0)
				utils.loadResources(['/LFFO/?fid=11122&t=js','/LFFO/?fid=11133&t=js','/LFFO/?fid=11121&t=js','/LFFO/?fid=11120&t=js','/LFFO/?fid=11118&t=js','/LFFO/?fid=13792&t=js'],sHs);
			var gallery = ho.find('div[type="gallery"][target="true"]');
			var sLg = function(){/*set highChart size*/
			}
			if(gallery.length > 0)
				utils.loadResources(['/LFFO/?fid=11115&t=js','/LFFO/?fid=11147&t=css','/LFFO/?fid=11151&t=css','/LFFO/?fid=11152&t=css'],sLg);
			
			var editor = ho.find('.texteditor');
			var sEtr = function(){/*set editor size*/
				editor.each(function(){/*create and fix size editor */
					var e = $(this);
					var thisEditor = elemArray['o' + e.attr('oi')];
					var lblWidth = gOOW(thisEditor,0);	
					thisEditor.cTID({'width':'calc(99.5% - ' + lblWidth + ')'});
				});
			}
			if(editor.length > 0)
				utils.loadResources(['/LFFO/?fid=11051&t=js','/LFFO/?fid=11150&t=css'],sEtr);			
			
			var editor2 = ho.find('.texteditor2');
			var sEtr2 = function(){/*set editor size*/
				editor2.each(function(){/*create and fix size editor */
					var e = $(this);
					var thisEditor = elemArray['o' + e.attr('oi')];
					var lblWidth = gOOW(thisEditor,0);	
					thisEditor.cTID({'width':'calc(99.5% - ' + lblWidth + ')'});
				});
			}
			if(editor2.length > 0)
				utils.loadResources(['/LFFO/?fid=1567253457092&t=js'],sEtr2);
			
			var timepickers = ho.find('input[type="timepicker"][target="true"]');
			var sTPS = function(){/*set timepicker size*/
				timepicker.each(function(){/*create and fix size timepicker */
					var e = $(this);
					var tp = elemArray['o' + e.attr('oi')];
					var widthOfImg = 33;
					var lblWidth = gOOW(tp,widthOfImg);
					e.css('width','calc(98.5% - ' + lblWidth + ')');
					tp.cTID();
				});
			}
			if(timepickers.length > 0)
				utils.loadResources(['/LFFO/?fid=13159&t=js','/LFFO/?fid=13160&t=css'],sTPS);		
			
			var alertify = ho.find('.mm_notifAlert');
			if(alertify.length > 0){
				alertify.each(function(){
					var e = $(this);
					var thisalertify = elemArray['o' + e.attr('oi')];
					thisalertify.cTID(bpms.cf.frizeForPopup);
				});
			}
		};
		if(!elements)
			c(ho);
		else
			for(var i in elements){
				var nC = ho.find('.mm_box[data-id="' + elements[i].box.data('id') + '"]');
				c(nC);
			}
	}
	appendElementsToHolder(elements,hso,elh){
		var ho = (hso instanceof jQuery) ? hso : $(hso);
		if(!$.isPlainObject(elements))
			ho.append(elements);
		else
			for(var i in elements){
				var e = elements[i];
				if(!(e.fl == bpms.cf.currentState && e.elh == elh))continue;
				var lE = ho.find('.mm_box').gEFDI('py',0,e.py);
				if(lE.length != 0){
					lE = lE[lE.length - 1];
					e.gEFA().insertAfter(lE);
				}else{
					ho.prepend(e.gEFA());
				}
			}
	}

	FFL(fbc,fl,ifFormLevelExist){
		var success = function(data){
			bpms.cf.x18.push(fl);
			var elements = bpms.QG(data[0].elements,bpms.cf);
			for(var k in elements)
				bpms.cf.elements[k] = elements[k];				
			
			ifFormLevelExist(fbc,fl);
		}
		utils.sendRequest({appearSplash:true,disAppearSplash:true,url:'FFL',success , data:{fbc:fbc,fl:fl}});
	}

	manageRoOrDODBS(e){
		var rO = {};
		var elements = {};
		var targetOiArray = (e && e.eisce) ? e.eisce : Object.keys(bpms.cf.originalElements);
		for(var i in targetOiArray){
			var k = targetOiArray[i];
			if(bpms.cf.elements[k]){
				var el = bpms.cf.elements[k];
				var exp = el.bsc;
				if(!exp || this.cE(exp))continue;				
				el.rEFD();
				delete bpms.cf.elements[k];
				bpms.manageRoOrDODBS(el)
			}else{
				var el = bpms.cf.originalElements[k];
				var exp = utils.cBTVB(el.x33);				
				if(exp && this.cE(exp)){
					var rOR = {};
					rO[k] = cloneJson(el);
					rOR[k] = cloneJson(el);
					bpms.cf.elements[k] = bpms.QG(rOR,bpms.cf)[k];
					elements[k] = bpms.cf.elements[k];
				}
			}
		}
		
		
		if(!Object.keys(rO).length)return rO;

		for(var i in elements){
			var json = {};
			json[i] = elements[i];			
			var hso = (elements[i].elh) ? (bpms.cf.elements['o' + elements[i].elh] && bpms.cf.elements['o' + elements[i].elh].nh) ? bpms.cf.elements['o' + elements[i].elh].nh : null : bpms.cp.mbmFrame.holderSelector;
			if(hso){
				bpms.appendElementsToHolder(json,hso,elements[i].elh);
				bpms.afterImport(hso,json);
			}else if(bpms.cf.tabs && bpms.cf.tabs[elements[i].elh] && bpms.cf.tabs[elements[i].elh].created){
				var ftoi = bpms.cf.tabs[elements[i].elh].ftoi;
				var nh = bpms.cf.elements['o' + ftoi].target.find('div.tabContainer[child_id="' + elements[i].elh + '"]>div.tabElementHoldet');
				bpms.appendElementsToHolder(json,nh,elements[i].elh);
				bpms.afterImport(nh);
			}			
		}
		
		return rO;
	}
	manageSubItemOfOption(e){				
		for(var i in bpms.cf.elements)
			bpms.cf.elements[i].filterSubItem();
	}
	manageIoDBS(e , oI){
		if(!oI.iv){
			var data = {};
			data[('o'+ e.oi)] = {};
			var res = {data:data,error_code:13};
			this.handleError(res);			
		}else{			
			e.rE();
			e.iSTS(true);
		}
	}
	
}