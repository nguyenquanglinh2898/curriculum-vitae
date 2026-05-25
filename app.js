const GITHUB_CONFIG = {
	owner: 'nguyenquanglinh2898',
	repo: 'curriculum-vitae',
	branch: 'master',
	filePath: 'data.json'
};

const state = {
	cvData: createEmptyCvData(),
	token: '',
	passphrase: '',
	fileSha: '',
	isAdmin: false,
	pendingDelete: null,
	pendingProfileAvatar: 'default-avatar.jpg',
	dragProjectId: ''
};

const AVATAR_CONFIG = {
	maxBytes: 120 * 1024,
	maxDimension: 512,
	minDimension: 160,
	qualityStart: 0.9,
	qualityStep: 0.1,
	downscaleStep: 0.85
};

const INLINE_IMAGE_CONFIG = {
	maxBytes: 80 * 1024,
	maxDimension: 256,
	minDimension: 96,
	qualityStart: 0.9,
	qualityStep: 0.1,
	downscaleStep: 0.85
};

const SAVE_CONFIG = {
	maxEncodedContentLength: 900 * 1024,
	avatarFallbackBytes: [120 * 1024, 90 * 1024, 70 * 1024],
	inlineImageFallbackBytes: [80 * 1024, 60 * 1024, 45 * 1024]
};

const selectors = {
	profileName: document.getElementById('profile-name'),
	profileTitle: document.getElementById('profile-title'),
	profileSummary: document.getElementById('profile-summary'),
	profileAvatar: document.getElementById('profile-avatar'),
	contactPhone: document.getElementById('contact-phone'),
	contactEmail: document.getElementById('contact-email'),
	footerName: document.getElementById('footer-name'),
	footerYear: document.getElementById('footer-year'),
	summaryContent: document.getElementById('summary-content'),
	skillsContainer: document.getElementById('skills-container'),
	experienceList: document.getElementById('experience-list'),
	educationList: document.getElementById('education-list'),
	projectsList: document.getElementById('projects-list'),
	awardsList: document.getElementById('awards-list'),
	adminToolbar: document.getElementById('admin-toolbar'),
	adminLoginButton: document.getElementById('btn-admin-login'),
	logoutButton: document.getElementById('btn-logout'),
	backdrop: document.getElementById('modal-backdrop'),
	confirmMessage: document.getElementById('modal-confirm-message'),
	confirmYesButton: document.getElementById('btn-confirm-yes'),
	formLogin: document.getElementById('form-login'),
	formProfile: document.getElementById('form-profile'),
	formSummary: document.getElementById('form-summary'),
	formExperience: document.getElementById('form-experience'),
	formEducation: document.getElementById('form-education'),
	formProject: document.getElementById('form-project'),
	formAward: document.getElementById('form-award'),
	formSkills: document.getElementById('form-skills'),
	formPassphrase: document.getElementById('form-passphrase'),
	skillsEditorList: document.getElementById('skills-editor-list'),
	projTechEditorList: document.getElementById('proj-tech-editor-list'),
	loginError: document.getElementById('login-error'),
	profileError: document.getElementById('profile-error'),
	summaryError: document.getElementById('summary-error'),
	experienceError: document.getElementById('experience-error'),
	educationError: document.getElementById('education-error'),
	projectError: document.getElementById('project-error'),
	awardError: document.getElementById('award-error'),
	skillsError: document.getElementById('skills-error'),
	passphraseError: document.getElementById('passphrase-error'),
	inputGithubToken: document.getElementById('input-github-token'),
	inputPassphrase: document.getElementById('input-passphrase'),
	inputCurrentPassphrase: document.getElementById('input-current-passphrase'),
	inputNewPassphrase: document.getElementById('input-new-passphrase'),
	inputConfirmPassphrase: document.getElementById('input-confirm-passphrase'),
	inputProfileName: document.getElementById('input-p-name'),
	inputProfileTitle: document.getElementById('input-p-title'),
	inputProfileSummary: document.getElementById('input-p-summary'),
	inputProfileAvatarFile: document.getElementById('input-p-avatar-file'),
	avatarUploadPreview: document.getElementById('avatar-upload-preview'),
	avatarUploadStatus: document.getElementById('avatar-upload-status'),
	inputProfilePhone: document.getElementById('input-p-phone'),
	inputProfileEmail: document.getElementById('input-p-email'),
	inputSummaryText: document.getElementById('input-summary-text'),
	inputExpId: document.getElementById('input-exp-id'),
	inputExpCompany: document.getElementById('input-exp-company'),
	inputExpRole: document.getElementById('input-exp-role'),
	inputExpStart: document.getElementById('input-exp-start'),
	inputExpEnd: document.getElementById('input-exp-end'),
	inputExpDesc: document.getElementById('input-exp-desc'),
	inputExpTech: document.getElementById('input-exp-tech'),
	expTechEditorList: document.getElementById('exp-tech-editor-list'),
	inputExpLogo: document.getElementById('input-exp-logo'),
	inputExpLogoFile: document.getElementById('input-exp-logo-file'),
	expLogoPreview: document.getElementById('exp-logo-preview'),
	expLogoStatus: document.getElementById('exp-logo-status'),
	deleteExperienceButton: document.getElementById('btn-delete-experience'),
	inputEduId: document.getElementById('input-edu-id'),
	inputEduSchool: document.getElementById('input-edu-school'),
	inputEduDegree: document.getElementById('input-edu-degree'),
	inputEduField: document.getElementById('input-edu-field'),
	inputEduStart: document.getElementById('input-edu-start'),
	inputEduEnd: document.getElementById('input-edu-end'),
	inputEduGpa: document.getElementById('input-edu-gpa'),
	inputEduDesc: document.getElementById('input-edu-desc'),
	inputEduImage: document.getElementById('input-edu-image'),
	inputEduImageFile: document.getElementById('input-edu-image-file'),
	eduImagePreview: document.getElementById('edu-image-preview'),
	eduImageStatus: document.getElementById('edu-image-status'),
	deleteEducationButton: document.getElementById('btn-delete-education'),
	inputProjId: document.getElementById('input-proj-id'),
	inputProjName: document.getElementById('input-proj-name'),
	inputProjDesc: document.getElementById('input-proj-desc'),
	inputProjTech: document.getElementById('input-proj-tech'),
	inputProjContrib1: document.getElementById('input-proj-contrib-1'),
	inputProjContrib2: document.getElementById('input-proj-contrib-2'),
	inputProjContrib3: document.getElementById('input-proj-contrib-3'),
	inputProjUrl: document.getElementById('input-proj-url'),
	inputProjRepo: document.getElementById('input-proj-repo'),
	deleteProjectButton: document.getElementById('btn-delete-project'),
	inputAwardId: document.getElementById('input-award-id'),
	inputAwardName: document.getElementById('input-award-name'),
	inputAwardIssuer: document.getElementById('input-award-issuer'),
	inputAwardIssued: document.getElementById('input-award-issued'),
	inputAwardCredentialId: document.getElementById('input-award-credential-id'),
	inputAwardUrl: document.getElementById('input-award-url'),
	inputAwardDesc: document.getElementById('input-award-desc'),
	inputAwardImage: document.getElementById('input-award-image'),
	inputAwardImageFile: document.getElementById('input-award-image-file'),
	awardImagePreview: document.getElementById('award-image-preview'),
	awardImageStatus: document.getElementById('award-image-status'),
	deleteAwardButton: document.getElementById('btn-delete-award'),
	addSkillRowButton: document.querySelector('[data-action="add-skill-row"]')
};

const UI_TEXT = {
	success: 'Success!',
	error: 'Error!',
	noData: 'No data'
};

bootstrapApp();

function bootstrapApp() {
	const start = () => waitForCryptoJs()
		.then(initApp)
		.catch((error) => {
			console.error(error);
			renderFatalError(error.message || UI_TEXT.noData);
		});

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', start, { once: true });
		return;
	}

	start();
}

function waitForCryptoJs(timeoutMs = 8000) {
	if (window.CryptoJS) {
		window.__cryptoJsReady = true;
		return Promise.resolve();
	}

	const cryptoScript = document.getElementById('cryptojs-script');

	return new Promise((resolve, reject) => {
		let settled = false;

		const finish = (callback, value) => {
			if (settled) {
				return;
			}

			settled = true;
			cleanup();
			callback(value);
		};

		const timer = window.setTimeout(() => {
			finish(reject, new Error(UI_TEXT.noData));
		}, timeoutMs);

		const handleLoad = () => {
			if (window.CryptoJS) {
				window.__cryptoJsReady = true;
				finish(resolve);
				return;
			}

			finish(reject, new Error(UI_TEXT.noData));
		};

		const handleError = () => {
			finish(reject, new Error(UI_TEXT.noData));
		};

		const cleanup = () => {
			window.clearTimeout(timer);

			if (cryptoScript) {
				cryptoScript.removeEventListener('load', handleLoad);
				cryptoScript.removeEventListener('error', handleError);
			}
		};

		if (window.__cryptoJsLoadError) {
			finish(reject, new Error(UI_TEXT.noData));
			return;
		}

		if (window.__cryptoJsReady && window.CryptoJS) {
			finish(resolve);
			return;
		}

		if (!cryptoScript) {
			finish(reject, new Error(UI_TEXT.noData));
			return;
		}

		cryptoScript.addEventListener('load', handleLoad, { once: true });
		cryptoScript.addEventListener('error', handleError, { once: true });
	});
}

async function initApp() {
	selectors.footerYear.textContent = String(new Date().getFullYear());
	bindEvents();
	renderCv(state.cvData);

	const passphrase = window.prompt('Enter the password:');

	if (!passphrase) {
		renderFatalError(UI_TEXT.noData);
		return;
	}

	state.passphrase = passphrase;

	try {
		await loadCvFromGitHub({ passphrase });
	} catch (error) {
		console.error(error);
		renderNoDataState();
	}
}

function bindEvents() {
	document.addEventListener('keydown', handleGlobalShortcut);
	document.addEventListener('click', handleDocumentClick);

	selectors.adminLoginButton.addEventListener('click', openLoginModal);
	selectors.backdrop.addEventListener('click', closeAllModals);
	selectors.confirmYesButton.addEventListener('click', handleConfirmDelete);
	selectors.logoutButton.addEventListener('click', handleLogout);
	selectors.inputProfileAvatarFile.addEventListener('change', handleProfileAvatarSelection);
	selectors.inputExpLogoFile.addEventListener('change', (event) => handleInlineImageSelection(event, {
		hiddenInput: selectors.inputExpLogo,
		preview: selectors.expLogoPreview,
		status: selectors.expLogoStatus,
		fallbackValue: selectors.inputExpLogo.value,
		helpText: 'Upload a company logo or related image.'
	}, selectors.experienceError));
	selectors.inputEduImageFile.addEventListener('change', (event) => handleInlineImageSelection(event, {
		hiddenInput: selectors.inputEduImage,
		preview: selectors.eduImagePreview,
		status: selectors.eduImageStatus,
		fallbackValue: selectors.inputEduImage.value,
		helpText: 'Upload a school logo or related image.'
	}, selectors.educationError));
	selectors.inputAwardImageFile.addEventListener('change', (event) => handleInlineImageSelection(event, {
		hiddenInput: selectors.inputAwardImage,
		preview: selectors.awardImagePreview,
		status: selectors.awardImageStatus,
		fallbackValue: selectors.inputAwardImage.value,
		helpText: 'Upload a badge, certificate, or related image.'
	}, selectors.awardError));

	selectors.formLogin.addEventListener('submit', handleAdminLogin);
	selectors.formProfile.addEventListener('submit', handleProfileSave);
	selectors.formSummary.addEventListener('submit', handleSummarySave);
	selectors.formExperience.addEventListener('submit', handleExperienceSave);
	selectors.formEducation.addEventListener('submit', handleEducationSave);
	selectors.formProject.addEventListener('submit', handleProjectSave);
	selectors.formAward.addEventListener('submit', handleAwardSave);
	selectors.formSkills.addEventListener('submit', handleSkillsSave);
	selectors.formPassphrase.addEventListener('submit', handlePassphraseChange);

	selectors.deleteExperienceButton.addEventListener('click', () => queueDelete('experience', selectors.inputExpId.value, 'Delete this experience entry?'));
	selectors.deleteEducationButton.addEventListener('click', () => queueDelete('education', selectors.inputEduId.value, 'Delete this education entry?'));
	selectors.deleteProjectButton.addEventListener('click', () => queueDelete('projects', selectors.inputProjId.value, 'Delete this project?'));
	selectors.deleteAwardButton.addEventListener('click', () => queueDelete('awards', selectors.inputAwardId.value, 'Delete this award or certification?'));
	selectors.projectsList.addEventListener('dragstart', handleProjectDragStart);
	selectors.projectsList.addEventListener('dragover', handleProjectDragOver);
	selectors.projectsList.addEventListener('drop', handleProjectDrop);
	selectors.projectsList.addEventListener('dragend', handleProjectDragEnd);
}

function handleGlobalShortcut(event) {
	if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'e') {
		event.preventDefault();
		openLoginModal();
	}

	if (event.key === 'Escape') {
		closeAllModals();
	}
}

function handleDocumentClick(event) {
	const closeTrigger = event.target.closest('[data-close-modal]');

	if (closeTrigger) {
		closeModal(closeTrigger.getAttribute('data-close-modal'));
		return;
	}

	const editTrigger = event.target.closest('[data-action]');

	if (!editTrigger) {
		return;
	}

	const action = editTrigger.getAttribute('data-action');
	const itemId = editTrigger.getAttribute('data-item-id');

	if (action === 'edit-profile') {
		openProfileModal();
	} else if (action === 'edit-summary') {
		openSummaryModal();
	} else if (action === 'edit-skills') {
		openSkillsModal();
	} else if (action === 'add-experience') {
		openExperienceModal();
	} else if (action === 'add-education') {
		openEducationModal();
	} else if (action === 'add-project') {
		openProjectModal();
	} else if (action === 'add-award') {
		openAwardModal();
	} else if (action === 'add-skill-row') {
		appendSkillEditorRow();
	} else if (action === 'add-skill-tag-row') {
		appendTagEditorRow(editTrigger.closest('.skill-group-editor')?.querySelector('[data-skill-tag-list]'));
	} else if (action === 'remove-skill-row') {
		handleSkillRowRemoval(editTrigger);
	} else if (action === 'remove-tag-row') {
		handleTagRowRemoval(editTrigger);
	} else if (action === 'add-exp-tech-row') {
		appendTagEditorRow(selectors.expTechEditorList);
	} else if (action === 'add-proj-tech-row') {
		appendTagEditorRow(selectors.projTechEditorList);
	} else if (action === 'edit-experience') {
		openExperienceModal(findById(state.cvData.experience, itemId));
	} else if (action === 'edit-education') {
		openEducationModal(findById(state.cvData.education, itemId));
	} else if (action === 'edit-project') {
		openProjectModal(findById(state.cvData.projects, itemId));
	} else if (action === 'edit-award') {
		openAwardModal(findById(state.cvData.awards, itemId));
	} else if (action === 'change-passphrase') {
		openPassphraseModal();
	}
}

async function handleAdminLogin(event) {
	event.preventDefault();
	clearError(selectors.loginError);

	const token = selectors.inputGithubToken.value.trim();
	const passphrase = selectors.inputPassphrase.value.trim() || state.passphrase;

	if (!token) {
		showError(selectors.loginError, UI_TEXT.error);
		return;
	}

	if (!passphrase) {
		showError(selectors.loginError, UI_TEXT.error);
		return;
	}

	const submitButton = selectors.formLogin.querySelector('button[type="submit"]');
	toggleButtonLoading(submitButton, true);

	try {
		state.token = token;
		state.passphrase = passphrase;
		await loadCvFromGitHub({ token, passphrase });
		setAdminMode(true);
		closeAllModals();
	} catch (error) {
		console.error(error);
		showError(selectors.loginError, error.message || UI_TEXT.error);
	} finally {
		toggleButtonLoading(submitButton, false);
	}
}

async function loadCvFromGitHub({ token, passphrase }) {
	const file = await fetchCvFile(token);
	const encryptedPayload = extractEncryptedPayload(file);
	const cvData = normalizeCvData(decryptCvPayload(encryptedPayload, passphrase));

	state.cvData = cvData;
	state.fileSha = file.sha || '';
	renderCv(state.cvData);
}

async function fetchCvFile(token) {
	const response = await fetch(buildGitHubContentsUrl(), {
		headers: buildGitHubHeaders(token)
	});

	if (!response.ok) {
		throw new Error(await buildGitHubError(response, UI_TEXT.noData));
	}

	return response.json();
}

async function saveCvToGitHub() {
	if (!state.token) {
		throw new Error(UI_TEXT.error);
	}

	if (!state.passphrase) {
		throw new Error(UI_TEXT.error);
	}

	await ensureInlineImagesFitPayloadBudget();
	const encodedContent = buildEncodedCvContent(state.cvData, state.passphrase);

	if (encodedContent.length > SAVE_CONFIG.maxEncodedContentLength) {
		throw new Error(UI_TEXT.error);
	}

	const response = await fetch(buildGitHubContentsUrl(), {
		method: 'PUT',
		headers: {
			...buildGitHubHeaders(state.token),
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			message: `Update CV data at ${new Date().toISOString()}`,
			content: encodedContent,
			branch: GITHUB_CONFIG.branch,
			sha: state.fileSha || undefined
		})
	});

	if (!response.ok) {
		throw new Error(await buildGitHubError(response, UI_TEXT.error));
	}

	const result = await response.json();
	state.fileSha = result.content?.sha || state.fileSha;
}

function buildGitHubContentsUrl() {
	const encodedPath = GITHUB_CONFIG.filePath
		.split('/')
		.map(encodeURIComponent)
		.join('/');

	return `https://api.github.com/repos/${encodeURIComponent(GITHUB_CONFIG.owner)}/${encodeURIComponent(GITHUB_CONFIG.repo)}/contents/${encodedPath}?ref=${encodeURIComponent(GITHUB_CONFIG.branch)}`;
}

function buildGitHubHeaders(token) {
	const headers = {
		Accept: 'application/vnd.github+json'
	};

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	return headers;
}

async function buildGitHubError(response, fallbackMessage) {
	try {
		const body = await response.json();
		console.error('GitHub API error:', response.status, body);
		return fallbackMessage;
	} catch (_error) {
		console.error('GitHub API error:', response.status);
		return fallbackMessage;
	}
}

function extractEncryptedPayload(file) {
	const decodedContent = atob(String(file.content || '').replace(/\n/g, ''));
	const parsedFile = JSON.parse(decodedContent);
	const encryptedPayload = parsedFile.encryptedData || parsedFile.ciphertext || parsedFile.data;

	if (!encryptedPayload) {
		throw new Error(UI_TEXT.noData);
	}

	return encryptedPayload;
}

function encryptCvPayload(cvData, passphrase) {
	return window.CryptoJS.AES.encrypt(JSON.stringify(cvData), passphrase).toString();
}

function decryptCvPayload(encryptedPayload, passphrase) {
	const decrypted = window.CryptoJS.AES.decrypt(encryptedPayload, passphrase);
	const plaintext = decrypted.toString(window.CryptoJS.enc.Utf8);

	if (!plaintext) {
		throw new Error(UI_TEXT.error);
	}

	return JSON.parse(plaintext);
}

function renderCv(cvData) {
	renderProfile(cvData.profile);
	renderSummary(cvData.summary);
	renderSkills(cvData.skills);
	renderExperience(cvData.experience);
	renderEducation(cvData.education);
	renderProjects(cvData.projects);
	renderAwards(cvData.awards);
}

function renderProfile(profile) {
	selectors.profileName.textContent = profile.name || 'Your Name';
	selectors.profileTitle.textContent = profile.title || 'Job Title';
	selectors.profileSummary.textContent = profile.summary || 'A short description about yourself goes here.';
	selectors.profileAvatar.src = profile.avatar || 'default-avatar.jpg';
	selectors.footerName.textContent = profile.name || 'Your Name';

	updateContactLink(selectors.contactPhone, profile.phone ? `tel:${profile.phone}` : '', profile.phone || '+84 000 000 000');
	updateContactLink(selectors.contactEmail, profile.email ? `mailto:${profile.email}` : '', profile.email || 'email@example.com');
}

function renderSummary(summary) {
	selectors.summaryContent.innerHTML = summary
		? escapeHtml(summary)
		: '<p class="placeholder-text">No summary available.</p>';
}

function renderSkills(skills) {
	const groups = normalizeSkills(skills);

	if (!groups.length) {
		selectors.skillsContainer.innerHTML = '<p class="placeholder-text">No skills available.</p>';
		return;
	}

	selectors.skillsContainer.innerHTML = groups.map((group) => {
		const items = renderTagList(group.items, 'skill-chip');

		return `
			<div class="skill-group">
				<div class="skill-category-title">${escapeHtml(group.category)}</div>
				${items}
			</div>
		`;
	}).join('');
}

function renderExperience(experiences) {
	if (!experiences.length) {
		selectors.experienceList.innerHTML = '<p class="placeholder-text">No experience available.</p>';
		return;
	}

	selectors.experienceList.innerHTML = experiences.map((item) => {
		const logo = item.logo
			? `<img class="exp-logo" src="${escapeAttribute(item.logo)}" alt="${escapeAttribute(item.company || 'Company logo')}" />`
			: `<div class="exp-logo-placeholder">${escapeHtml(getInitials(item.company || item.role || 'CV'))}</div>`;

		return `
			<article class="exp-card">
				${state.isAdmin ? `<button type="button" class="card-edit-btn action-btn action-btn-edit" data-action="edit-experience" data-item-id="${escapeAttribute(item.id)}" aria-label="Edit experience">&#9998;</button>` : ''}
				${logo}
				<div class="exp-body">
					<h3 class="exp-role">${escapeHtml(item.role || 'Untitled Role')}</h3>
					<p class="exp-company">${escapeHtml(item.company || '')}</p>
					<p class="exp-meta">${escapeHtml(formatDateRange(item.start, item.end))}</p>
					<p class="exp-desc">${escapeHtml(item.description || '')}</p>
					${renderTagList(item.techStack || [])}
				</div>
			</article>
		`;
	}).join('');
}

function renderEducation(educationItems) {
	if (!educationItems.length) {
		selectors.educationList.innerHTML = '<p class="placeholder-text">No education available.</p>';
		return;
	}

	selectors.educationList.innerHTML = educationItems.map((item) => `
		<article class="edu-card">
			${state.isAdmin ? `<button type="button" class="card-edit-btn action-btn action-btn-edit" data-action="edit-education" data-item-id="${escapeAttribute(item.id)}" aria-label="Edit education">&#9998;</button>` : ''}
			${item.image ? `<img class="edu-icon-image" src="${escapeAttribute(item.image)}" alt="${escapeAttribute(item.school || 'Education image')}" />` : `<div class="edu-icon" aria-hidden="true">🎓</div>`}
			<div class="edu-body">
				<h3 class="edu-degree">${escapeHtml(item.degree || item.field || 'Education')}</h3>
				<p class="edu-school">${escapeHtml(item.school || '')}</p>
				<p class="edu-meta">${escapeHtml(formatMeta([item.field, formatDateRange(item.start, item.end), item.gpa]))}</p>
				<p class="edu-desc">${escapeHtml(item.description || '')}</p>
			</div>
		</article>
	`).join('');
}

function renderProjects(projects) {
	if (!projects.length) {
		selectors.projectsList.innerHTML = '<p class="placeholder-text">No projects available.</p>';
		return;
	}

	selectors.projectsList.innerHTML = `
		<div class="projects-list">
			${projects.map((item) => `
				<article class="proj-card ${state.isAdmin ? 'proj-card-draggable' : ''}" data-project-id="${escapeAttribute(item.id)}" draggable="${state.isAdmin ? 'true' : 'false'}" style="position: relative;">
					${state.isAdmin ? `<button type="button" class="card-edit-btn action-btn action-btn-edit" data-action="edit-project" data-item-id="${escapeAttribute(item.id)}" aria-label="Edit project">&#9998;</button>` : ''}
					<div class="proj-body">
						<div class="proj-header">
							<h3 class="proj-name">${escapeHtml(item.name || 'Untitled Project')}</h3>
							${renderTagList(item.techStack || [])}
						</div>
						<p class="proj-desc">${escapeHtml(item.description || '')}</p>
						${renderProjectContributions(item.contributions || [])}
						<div class="proj-links">${renderProjectLinks(item)}</div>
					</div>
				</article>
			`).join('')}
		</div>
	`;
}

function renderAwards(awards) {
	if (!awards.length) {
		selectors.awardsList.innerHTML = '<p class="placeholder-text">No awards or certifications available.</p>';
		return;
	}

	selectors.awardsList.innerHTML = awards.map((item) => `
		<article class="award-card">
			${state.isAdmin ? `<button type="button" class="card-edit-btn action-btn action-btn-edit" data-action="edit-award" data-item-id="${escapeAttribute(item.id)}" aria-label="Edit award">&#9998;</button>` : ''}
			${item.image ? `<img class="award-icon-image" src="${escapeAttribute(item.image)}" alt="${escapeAttribute(item.name || 'Award image')}" />` : `<div class="award-icon" aria-hidden="true">🏆</div>`}
			<div class="award-body">
				<h3 class="award-name">${escapeHtml(item.name || 'Award')}</h3>
				<p class="award-issuer">${escapeHtml(item.issuer || '')}</p>
				<p class="award-meta">${escapeHtml(formatMeta([formatMonthValue(item.issued), item.credentialId]))}</p>
				${item.url ? `<p class="award-credential"><a href="${escapeAttribute(item.url)}" target="_blank" rel="noopener">View credential</a></p>` : ''}
				${item.description ? `<p class="exp-desc">${escapeHtml(item.description)}</p>` : ''}
			</div>
		</article>
	`).join('');
}

function renderProjectContributions(contributions) {
	const items = normalizeContributions(contributions);

	if (!items.length) {
		return '';
	}

	return `
		<div class="proj-contributions">
			<p class="proj-contrib-title">Key Contributions</p>
			<ul class="proj-contrib-list">
				${items.map((item) => `<li><span class="proj-contrib-bullet" aria-hidden="true">◆</span><span>${escapeHtml(item)}</span></li>`).join('')}
			</ul>
		</div>
	`;
}

function renderProjectLinks(project) {
	const links = [];

	if (project.url) {
		links.push(`<a href="${escapeAttribute(project.url)}" target="_blank" rel="noopener">Live</a>`);
	}

	if (project.repo) {
		links.push(`<a href="${escapeAttribute(project.repo)}" target="_blank" rel="noopener">Repo</a>`);
	}

	return links.length ? links.join('') : '';
}

function handleProjectDragStart(event) {
	const card = event.target.closest('.proj-card-draggable');

	if (!state.isAdmin || !card) {
		return;
	}

	state.dragProjectId = card.dataset.projectId || '';
	card.classList.add('is-dragging');

	if (event.dataTransfer) {
		event.dataTransfer.effectAllowed = 'move';
		event.dataTransfer.setData('text/plain', state.dragProjectId);
	}
}

function handleProjectDragOver(event) {
	const card = event.target.closest('.proj-card-draggable');

	if (!state.isAdmin || !state.dragProjectId || !card || card.dataset.projectId === state.dragProjectId) {
		return;
	}

	event.preventDefault();

	const bounds = card.getBoundingClientRect();
	const insertAfter = event.clientY > bounds.top + bounds.height / 2;

	clearProjectDropIndicators();
	card.classList.add(insertAfter ? 'drop-after' : 'drop-before');

	if (event.dataTransfer) {
		event.dataTransfer.dropEffect = 'move';
	}
}

async function handleProjectDrop(event) {
	const targetCard = event.target.closest('.proj-card-draggable');
	const draggedId = state.dragProjectId || event.dataTransfer?.getData('text/plain') || '';

	if (!state.isAdmin || !draggedId || !targetCard || targetCard.dataset.projectId === draggedId) {
		return;
	}

	event.preventDefault();

	const targetId = targetCard.dataset.projectId || '';
	const bounds = targetCard.getBoundingClientRect();
	const insertAfter = event.clientY > bounds.top + bounds.height / 2;
	const previousProjects = state.cvData.projects.map((item) => ({ ...item }));
	const reorderedProjects = reorderProjects(state.cvData.projects, draggedId, targetId, insertAfter);

	if (!reorderedProjects) {
		clearProjectDragState();
		return;
	}

	state.cvData.projects = reorderedProjects;
	renderProjects(state.cvData.projects);

	try {
		await saveCvToGitHub();
	} catch (error) {
		console.error(error);
		state.cvData.projects = previousProjects;
		renderProjects(state.cvData.projects);
		window.alert(error.message || UI_TEXT.error);
	} finally {
		clearProjectDragState();
	}
}

function handleProjectDragEnd() {
	clearProjectDragState();
}

function clearProjectDragState() {
	state.dragProjectId = '';
	clearProjectDropIndicators();
	document.querySelectorAll('.proj-card.is-dragging').forEach((card) => card.classList.remove('is-dragging'));
}

function clearProjectDropIndicators() {
	document.querySelectorAll('.proj-card.drop-before, .proj-card.drop-after').forEach((card) => {
		card.classList.remove('drop-before', 'drop-after');
	});
}

function reorderProjects(projects, draggedId, targetId, insertAfter) {
	const nextProjects = [...projects];
	const fromIndex = nextProjects.findIndex((item) => item.id === draggedId);
	const targetIndex = nextProjects.findIndex((item) => item.id === targetId);

	if (fromIndex === -1 || targetIndex === -1) {
		return null;
	}

	const [draggedProject] = nextProjects.splice(fromIndex, 1);
	const adjustedTargetIndex = nextProjects.findIndex((item) => item.id === targetId);
	const destinationIndex = adjustedTargetIndex + (insertAfter ? 1 : 0);

	nextProjects.splice(destinationIndex, 0, draggedProject);
	return nextProjects;
}

function renderTagList(values, chipClass = 'tag') {
	const items = normalizeTagCollection(values);

	if (!items.length) {
		return '';
	}

	return `<div class="tag-list">${items.map((item) => `<span class="${chipClass}" style="${buildTagStyle(item.color)}">${escapeHtml(item.label)}</span>`).join('')}</div>`;
}

function openLoginModal() {
	clearError(selectors.loginError);
	selectors.inputGithubToken.value = '';
	selectors.inputPassphrase.value = state.passphrase;
	selectors.inputPassphrase.readOnly = Boolean(state.passphrase);
	openModal('modal-login');
}

function openProfileModal() {
	clearError(selectors.profileError);
	const profile = state.cvData.profile;
	state.pendingProfileAvatar = profile.avatar || 'default-avatar.jpg';
	selectors.inputProfileName.value = profile.name || '';
	selectors.inputProfileTitle.value = profile.title || '';
	selectors.inputProfileSummary.value = profile.summary || '';
	selectors.inputProfileAvatarFile.value = '';
	updateProfileAvatarPreview(state.pendingProfileAvatar, 'Upload an image file. It will be resized and compressed automatically before saving.');
	selectors.inputProfilePhone.value = profile.phone || '';
	selectors.inputProfileEmail.value = profile.email || '';
	openModal('modal-profile');
}

function openSummaryModal() {
	clearError(selectors.summaryError);
	selectors.inputSummaryText.value = state.cvData.summary || '';
	openModal('modal-summary');
}

function openPassphraseModal() {
	clearError(selectors.passphraseError);
	selectors.formPassphrase.reset();
	openModal('modal-passphrase');
}

function openSkillsModal() {
	clearError(selectors.skillsError);
	renderSkillsEditor(state.cvData.skills);
	openModal('modal-skills');
}

function openExperienceModal(item) {
	clearError(selectors.experienceError);
	selectors.formExperience.reset();
	selectors.inputExpId.value = item?.id || '';
	selectors.inputExpCompany.value = item?.company || '';
	selectors.inputExpRole.value = item?.role || '';
	selectors.inputExpStart.value = item?.start || '';
	selectors.inputExpEnd.value = item?.end || '';
	selectors.inputExpDesc.value = item?.description || '';
	selectors.inputExpTech.value = JSON.stringify(normalizeTagCollection(item?.techStack || []));
	selectors.expTechEditorList.innerHTML = '';
	renderTagEditorList(selectors.expTechEditorList, item?.techStack || []);
	selectors.inputExpLogo.value = item?.logo || '';
	selectors.inputExpLogoFile.value = '';
	updateGenericImagePreview(selectors.expLogoPreview, selectors.expLogoStatus, item?.logo || 'default-avatar.jpg', 'Upload a company logo or related image.');
	selectors.deleteExperienceButton.classList.toggle('hidden', !item?.id);
	openModal('modal-experience');
}

function openEducationModal(item) {
	clearError(selectors.educationError);
	selectors.formEducation.reset();
	selectors.inputEduId.value = item?.id || '';
	selectors.inputEduSchool.value = item?.school || '';
	selectors.inputEduDegree.value = item?.degree || '';
	selectors.inputEduField.value = item?.field || '';
	selectors.inputEduStart.value = item?.start || '';
	selectors.inputEduEnd.value = item?.end || '';
	selectors.inputEduGpa.value = item?.gpa || '';
	selectors.inputEduDesc.value = item?.description || '';
	selectors.inputEduImage.value = item?.image || '';
	selectors.inputEduImageFile.value = '';
	updateGenericImagePreview(selectors.eduImagePreview, selectors.eduImageStatus, item?.image || 'default-avatar.jpg', 'Upload a school logo or related image.');
	selectors.deleteEducationButton.classList.toggle('hidden', !item?.id);
	openModal('modal-education');
}

function openProjectModal(item) {
	clearError(selectors.projectError);
	selectors.formProject.reset();
	selectors.inputProjId.value = item?.id || '';
	selectors.inputProjName.value = item?.name || '';
	selectors.inputProjDesc.value = item?.description || '';
	selectors.inputProjTech.value = JSON.stringify(normalizeTagCollection(item?.techStack || []));
	selectors.projTechEditorList.innerHTML = '';
	renderTagEditorList(selectors.projTechEditorList, item?.techStack || []);
	const contributions = normalizeContributions(item?.contributions || []);
	selectors.inputProjContrib1.value = contributions[0] || '';
	selectors.inputProjContrib2.value = contributions[1] || '';
	selectors.inputProjContrib3.value = contributions[2] || '';
	selectors.inputProjUrl.value = item?.url || '';
	selectors.inputProjRepo.value = item?.repo || '';
	selectors.deleteProjectButton.classList.toggle('hidden', !item?.id);
	openModal('modal-project');
}

function openAwardModal(item) {
	clearError(selectors.awardError);
	selectors.formAward.reset();
	selectors.inputAwardId.value = item?.id || '';
	selectors.inputAwardName.value = item?.name || '';
	selectors.inputAwardIssuer.value = item?.issuer || '';
	selectors.inputAwardIssued.value = item?.issued || '';
	selectors.inputAwardCredentialId.value = item?.credentialId || '';
	selectors.inputAwardUrl.value = item?.url || '';
	selectors.inputAwardDesc.value = item?.description || '';
	selectors.inputAwardImage.value = item?.image || '';
	selectors.inputAwardImageFile.value = '';
	updateGenericImagePreview(selectors.awardImagePreview, selectors.awardImageStatus, item?.image || 'default-avatar.jpg', 'Upload a badge, certificate, or related image.');
	selectors.deleteAwardButton.classList.toggle('hidden', !item?.id);
	openModal('modal-award');
}

function openModal(modalId) {
	closeAllModals();
	const modal = document.getElementById(modalId);

	if (!modal) {
		return;
	}

	selectors.backdrop.classList.remove('hidden');
	modal.classList.remove('hidden');
}

function closeModal(modalId) {
	const modal = document.getElementById(modalId);

	if (modal) {
		modal.classList.add('hidden');
	}

	if (!document.querySelector('.modal:not(.hidden)')) {
		selectors.backdrop.classList.add('hidden');
	}
}

function closeAllModals() {
	document.querySelectorAll('.modal').forEach((modal) => modal.classList.add('hidden'));
	selectors.backdrop.classList.add('hidden');
	selectors.inputPassphrase.readOnly = false;
}

function setAdminMode(enabled) {
	state.isAdmin = enabled;
	document.body.classList.toggle('admin-mode', enabled);
	selectors.adminToolbar.classList.toggle('hidden', !enabled);
	renderCv(state.cvData);
}

function handleLogout() {
	state.token = '';
	selectors.formLogin.reset();
	setAdminMode(false);
}

async function handleProfileSave(event) {
	event.preventDefault();
	clearError(selectors.profileError);

	if (!selectors.inputProfileName.value.trim()) {
		showError(selectors.profileError, UI_TEXT.error);
		return;
	}

	state.cvData.profile = {
		name: selectors.inputProfileName.value.trim(),
		title: selectors.inputProfileTitle.value.trim(),
		summary: selectors.inputProfileSummary.value.trim(),
		avatar: state.pendingProfileAvatar || state.cvData.profile.avatar || 'default-avatar.jpg',
		phone: selectors.inputProfilePhone.value.trim(),
		email: selectors.inputProfileEmail.value.trim()
	};

	await commitAndRefresh(selectors.formProfile, selectors.profileError, 'modal-profile');
}

async function handleProfileAvatarSelection(event) {
	clearError(selectors.profileError);
	const [file] = event.target.files || [];

	if (!file) {
		return;
	}

	try {
		selectors.avatarUploadStatus.textContent = 'Optimizing image...';
		const avatarDataUrl = await optimizeAvatarFile(file);
		state.pendingProfileAvatar = avatarDataUrl;
		updateProfileAvatarPreview(avatarDataUrl, `Ready to save. ${formatBytes(getDataUrlByteSize(avatarDataUrl))}`);
	} catch (error) {
		console.error(error);
		selectors.inputProfileAvatarFile.value = '';
		showError(selectors.profileError, error.message || UI_TEXT.error);
		updateProfileAvatarPreview(state.pendingProfileAvatar || state.cvData.profile.avatar || 'default-avatar.jpg', 'Upload an image file. It will be resized and compressed automatically before saving.');
	}
}

async function handleSummarySave(event) {
	event.preventDefault();
	clearError(selectors.summaryError);
	state.cvData.summary = selectors.inputSummaryText.value.trim();
	await commitAndRefresh(selectors.formSummary, selectors.summaryError, 'modal-summary');
}

async function handleSkillsSave(event) {
	event.preventDefault();
	clearError(selectors.skillsError);

	try {
		state.cvData.skills = collectSkillEditorRows();
	} catch (error) {
		showError(selectors.skillsError, error.message || UI_TEXT.error);
		return;
	}

	await commitAndRefresh(selectors.formSkills, selectors.skillsError, 'modal-skills');
}

async function handleExperienceSave(event) {
	event.preventDefault();
	clearError(selectors.experienceError);

	if (!selectors.inputExpCompany.value.trim() || !selectors.inputExpRole.value.trim()) {
		showError(selectors.experienceError, UI_TEXT.error);
		return;
	}

	const item = {
		id: selectors.inputExpId.value || createId('exp'),
		company: selectors.inputExpCompany.value.trim(),
		role: selectors.inputExpRole.value.trim(),
		start: selectors.inputExpStart.value,
		end: selectors.inputExpEnd.value,
		description: selectors.inputExpDesc.value.trim(),
		techStack: collectTagEditorRows(selectors.expTechEditorList),
		logo: selectors.inputExpLogo.value.trim()
	};

	upsertCollectionItem(state.cvData.experience, item);
	await commitAndRefresh(selectors.formExperience, selectors.experienceError, 'modal-experience');
}

async function handleEducationSave(event) {
	event.preventDefault();
	clearError(selectors.educationError);

	if (!selectors.inputEduSchool.value.trim()) {
		showError(selectors.educationError, UI_TEXT.error);
		return;
	}

	const item = {
		id: selectors.inputEduId.value || createId('edu'),
		school: selectors.inputEduSchool.value.trim(),
		degree: selectors.inputEduDegree.value.trim(),
		field: selectors.inputEduField.value.trim(),
		start: selectors.inputEduStart.value,
		end: selectors.inputEduEnd.value,
		gpa: selectors.inputEduGpa.value.trim(),
		description: selectors.inputEduDesc.value.trim(),
		image: selectors.inputEduImage.value.trim()
	};

	upsertCollectionItem(state.cvData.education, item);
	await commitAndRefresh(selectors.formEducation, selectors.educationError, 'modal-education');
}

async function handleProjectSave(event) {
	event.preventDefault();
	clearError(selectors.projectError);

	if (!selectors.inputProjName.value.trim()) {
		showError(selectors.projectError, UI_TEXT.error);
		return;
	}

	const item = {
		id: selectors.inputProjId.value || createId('proj'),
		name: selectors.inputProjName.value.trim(),
		description: selectors.inputProjDesc.value.trim(),
		techStack: collectTagEditorRows(selectors.projTechEditorList),
		contributions: normalizeContributions([
			selectors.inputProjContrib1.value,
			selectors.inputProjContrib2.value,
			selectors.inputProjContrib3.value
		]),
		url: selectors.inputProjUrl.value.trim(),
		repo: selectors.inputProjRepo.value.trim()
	};

	upsertCollectionItem(state.cvData.projects, item);
	await commitAndRefresh(selectors.formProject, selectors.projectError, 'modal-project');
}

async function handleAwardSave(event) {
	event.preventDefault();
	clearError(selectors.awardError);

	if (!selectors.inputAwardName.value.trim()) {
		showError(selectors.awardError, UI_TEXT.error);
		return;
	}

	const item = {
		id: selectors.inputAwardId.value || createId('award'),
		name: selectors.inputAwardName.value.trim(),
		issuer: selectors.inputAwardIssuer.value.trim(),
		issued: selectors.inputAwardIssued.value,
		credentialId: selectors.inputAwardCredentialId.value.trim(),
		url: selectors.inputAwardUrl.value.trim(),
		description: selectors.inputAwardDesc.value.trim(),
		image: selectors.inputAwardImage.value.trim()
	};

	upsertCollectionItem(state.cvData.awards, item);
	await commitAndRefresh(selectors.formAward, selectors.awardError, 'modal-award');
}

async function commitAndRefresh(form, errorElement, modalId) {
	const submitButton = form.querySelector('button[type="submit"]');
	toggleButtonLoading(submitButton, true);

	try {
		await saveCvToGitHub();
		renderCv(state.cvData);
		closeModal(modalId);
		window.alert(UI_TEXT.success);
	} catch (error) {
		console.error(error);
		showError(errorElement, error.message || UI_TEXT.error);
	} finally {
		toggleButtonLoading(submitButton, false);
	}
}

async function handlePassphraseChange(event) {
	event.preventDefault();
	clearError(selectors.passphraseError);

	const currentPassphrase = selectors.inputCurrentPassphrase.value.trim();
	const newPassphrase = selectors.inputNewPassphrase.value.trim();
	const confirmPassphrase = selectors.inputConfirmPassphrase.value.trim();

	if (!currentPassphrase || !newPassphrase || !confirmPassphrase) {
		showError(selectors.passphraseError, 'Please fill in all passphrase fields.');
		return;
	}

	if (currentPassphrase !== state.passphrase) {
		showError(selectors.passphraseError, 'Current passphrase does not match the active one.');
		return;
	}

	if (newPassphrase !== confirmPassphrase) {
		showError(selectors.passphraseError, 'New passphrase confirmation does not match.');
		return;
	}

	if (newPassphrase === state.passphrase) {
		showError(selectors.passphraseError, 'New passphrase must be different from the current one.');
		return;
	}

	const submitButton = selectors.formPassphrase.querySelector('button[type="submit"]');
	toggleButtonLoading(submitButton, true);
	const previousPassphrase = state.passphrase;

	try {
		state.passphrase = newPassphrase;
		await saveCvToGitHub();
		closeModal('modal-passphrase');
		window.alert(UI_TEXT.success);
	} catch (error) {
		state.passphrase = previousPassphrase;
		console.error(error);
		showError(selectors.passphraseError, error.message || UI_TEXT.error);
	} finally {
		toggleButtonLoading(submitButton, false);
	}
}

function queueDelete(collectionKey, itemId, message) {
	if (!itemId) {
		return;
	}

	state.pendingDelete = { collectionKey, itemId };
	selectors.confirmMessage.textContent = message;
	openModal('modal-confirm');
}

async function handleConfirmDelete() {
	if (!state.pendingDelete) {
		closeModal('modal-confirm');
		return;
	}

	const { collectionKey, itemId } = state.pendingDelete;
	state.cvData[collectionKey] = state.cvData[collectionKey].filter((item) => item.id !== itemId);
	state.pendingDelete = null;
	toggleButtonLoading(selectors.confirmYesButton, true);

	try {
		await saveCvToGitHub();
		renderCv(state.cvData);
		closeAllModals();
	} catch (error) {
		console.error(error);
		window.alert(error.message || UI_TEXT.error);
	} finally {
		toggleButtonLoading(selectors.confirmYesButton, false);
	}
}

function upsertCollectionItem(collection, item) {
	const index = collection.findIndex((entry) => entry.id === item.id);

	if (index === -1) {
		collection.unshift(item);
		return;
	}

	collection[index] = item;
}

function findById(collection, id) {
	return collection.find((item) => item.id === id) || null;
}

function normalizeCvData(data) {
	const normalized = createEmptyCvData();
	const source = data || {};
	normalized.profile = {
		...normalized.profile,
		...(source.profile || {}),
		phone: source.profile?.phone || source.profile?.github || '',
		email: source.profile?.email || source.profile?.linkedin || ''
	};
	normalized.summary = source.summary || source.profile?.summary || '';
	normalized.skills = normalizeSkills(source.skills || []);
	normalized.experience = normalizeCollection(source.experience || source.experiences || [], 'exp');
	normalized.education = normalizeCollection(source.education || [], 'edu');
	normalized.projects = normalizeCollection(source.projects || [], 'proj');
	normalized.awards = normalizeCollection(source.awards || source.certifications || [], 'award');
	return normalized;
}

function normalizeCollection(collection, prefix) {
	if (!Array.isArray(collection)) {
		return [];
	}

	return collection.map((item) => ({
		...item,
		techStack: prefix === 'proj' || prefix === 'exp' ? normalizeTagCollection(item.techStack || item.stack || []) : item.techStack,
		contributions: prefix === 'proj' ? normalizeContributions(item.contributions || item.highlights || []) : item.contributions,
		id: item.id || createId(prefix)
	}));
}

function normalizeSkills(skills) {
	if (Array.isArray(skills)) {
		return skills
			.map((entry) => {
				if (typeof entry === 'string') {
					return {
						category: 'General',
						items: normalizeTagCollection([entry])
					};
				}

				return {
					category: entry.category || entry.name || 'General',
					items: normalizeTagCollection(Array.isArray(entry.items) ? entry.items : entry.tags || [])
				};
			})
			.filter((entry) => entry.items.length);
	}

	if (skills && typeof skills === 'object') {
		return Object.entries(skills)
			.map(([category, items]) => ({
				category,
				items: normalizeTagCollection(items)
			}))
			.filter((entry) => entry.items.length);
	}

	return [];
}

function renderSkillsEditor(skills) {
	const groups = normalizeSkills(skills);
	selectors.skillsEditorList.innerHTML = groups.length
		? groups.map((group) => createSkillEditorRowMarkup(group)).join('')
		: createSkillEditorRowMarkup();
}

function appendSkillEditorRow(skill = { category: '', items: [] }) {
	selectors.skillsEditorList.insertAdjacentHTML('beforeend', createSkillEditorRowMarkup(skill));
}

function handleSkillRowRemoval(trigger) {
	const row = trigger.closest('.skill-group-editor');

	if (!row) {
		return;
	}

	const rows = selectors.skillsEditorList.querySelectorAll('.skill-group-editor');

	if (rows.length === 1) {
		row.querySelector('[data-skill-field="category"]').value = '';
		renderTagEditorList(row.querySelector('[data-skill-tag-list]'), []);
		return;
	}

	row.remove();
}

function collectSkillEditorRows() {
	const groups = Array.from(selectors.skillsEditorList.querySelectorAll('.skill-group-editor'));
	const skills = [];

	for (const row of groups) {
		const category = row.querySelector('[data-skill-field="category"]').value.trim();
		const tags = collectTagEditorRows(row.querySelector('[data-skill-tag-list]'));

		if (!category && !tags.length) {
			continue;
		}

		if (!category || !tags.length) {
			throw new Error(UI_TEXT.error);
		}

		skills.push({
			category,
			items: tags
		});
	}

	return skills;
}

function createSkillEditorRowMarkup(skill = { category: '', items: [] }) {
	return `
		<div class="skill-group-editor">
			<div class="skill-group-editor-header">
				<div class="skill-editor-field">
				<label>Skill Name</label>
				<input type="text" data-skill-field="category" placeholder="Skill name" value="${escapeAttribute(skill.category || '')}" />
			</div>
				<button type="button" class="btn action-btn action-btn-delete skill-group-remove" data-action="remove-skill-row" aria-label="Remove skill group">Delete Group</button>
			</div>
			<div class="tag-editor-toolbar">
				<button type="button" class="btn btn-secondary" data-action="add-skill-tag-row">+ Add Tag</button>
			</div>
			<div class="tag-editor-list" data-skill-tag-list>
				${renderTagEditorRows(skill.items || [])}
			</div>
		</div>
	`;
}

function createEmptyCvData() {
	return {
		profile: {
			name: 'Your Name',
			title: 'Job Title',
			summary: 'A short description about yourself goes here.',
			avatar: 'default-avatar.jpg',
			phone: '',
			email: ''
		},
		summary: '',
		skills: [],
		experience: [],
		education: [],
		projects: [],
		awards: []
	};
}

async function optimizeAvatarFile(file) {
	if (!file.type.startsWith('image/')) {
		throw new Error(UI_TEXT.error);
	}

	const originalDataUrl = await readFileAsDataUrl(file);
	const image = await loadImageElement(originalDataUrl);
	return compressLoadedImageToTarget(image, AVATAR_CONFIG.maxBytes);
}

async function handleInlineImageSelection(event, { hiddenInput, preview, status, fallbackValue, helpText }, errorElement) {
	const [file] = event.target.files || [];

	if (!file) {
		return;
	}

	try {
		clearError(errorElement);
		status.textContent = 'Optimizing image...';
		const dataUrl = await optimizeInlineImageFile(file);
		hiddenInput.value = dataUrl;
		updateGenericImagePreview(preview, status, dataUrl, `Ready to save. ${formatBytes(getDataUrlByteSize(dataUrl))}`);
	} catch (error) {
		console.error(error);
		event.target.value = '';
		showError(errorElement, error.message || UI_TEXT.error);
		updateGenericImagePreview(preview, status, fallbackValue || 'default-avatar.jpg', helpText);
	}
}

async function optimizeInlineImageFile(file) {
	if (!file.type.startsWith('image/')) {
		throw new Error(UI_TEXT.error);
	}

	const originalDataUrl = await readFileAsDataUrl(file);
	const image = await loadImageElement(originalDataUrl);
	return compressLoadedImageToTarget(image, INLINE_IMAGE_CONFIG.maxBytes, INLINE_IMAGE_CONFIG);
}

async function ensureInlineImagesFitPayloadBudget() {
	if (buildEncodedCvContent(state.cvData, state.passphrase).length <= SAVE_CONFIG.maxEncodedContentLength) {
		return;
	}

	const imageEntries = [
		{ path: ['profile', 'avatar'], targets: SAVE_CONFIG.avatarFallbackBytes, onUpdate: (value) => {
			state.pendingProfileAvatar = value;
			updateProfileAvatarPreview(value, `Ready to save. ${formatBytes(getDataUrlByteSize(value))}`);
		}},
		...state.cvData.experience.map((item, index) => ({ path: ['experience', index, 'logo'], targets: SAVE_CONFIG.inlineImageFallbackBytes })),
		...state.cvData.education.map((item, index) => ({ path: ['education', index, 'image'], targets: SAVE_CONFIG.inlineImageFallbackBytes })),
		...state.cvData.awards.map((item, index) => ({ path: ['awards', index, 'image'], targets: SAVE_CONFIG.inlineImageFallbackBytes }))
	];

	for (const entry of imageEntries) {
		const currentValue = getNestedValue(state.cvData, entry.path);

		if (!isInlineImageDataUrl(currentValue)) {
			continue;
		}

		if (buildEncodedCvContent(state.cvData, state.passphrase).length <= SAVE_CONFIG.maxEncodedContentLength) {
			return;
		}

		const image = await loadImageElement(currentValue);

		for (const targetBytes of entry.targets) {
			const optimizedValue = compressLoadedImageToTarget(image, targetBytes, entry.path[0] === 'profile' ? AVATAR_CONFIG : INLINE_IMAGE_CONFIG);
			setNestedValue(state.cvData, entry.path, optimizedValue);

			if (typeof entry.onUpdate === 'function') {
				entry.onUpdate(optimizedValue);
			}

			if (buildEncodedCvContent(state.cvData, state.passphrase).length <= SAVE_CONFIG.maxEncodedContentLength) {
				return;
			}
		}
	}

	if (buildEncodedCvContent(state.cvData, state.passphrase).length > SAVE_CONFIG.maxEncodedContentLength) {
		throw new Error(UI_TEXT.error);
	}
}

function readFileAsDataUrl(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(String(reader.result || ''));
		reader.onerror = () => reject(new Error(UI_TEXT.error));
		reader.readAsDataURL(file);
	});
}

function loadImageElement(src) {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = () => resolve(image);
		image.onerror = () => reject(new Error(UI_TEXT.error));
		image.src = src;
	});
}

function fitImageDimensions(width, height, maxDimension) {
	if (!width || !height) {
		return { width: maxDimension, height: maxDimension };
	}

	const ratio = Math.min(maxDimension / width, maxDimension / height, 1);

	return {
		width: Math.max(1, Math.round(width * ratio)),
		height: Math.max(1, Math.round(height * ratio))
	};
}

function renderImageToDataUrl(image, width, height, quality) {
	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;

	const context = canvas.getContext('2d');

	if (!context) {
		throw new Error(UI_TEXT.error);
	}

	context.fillStyle = '#ffffff';
	context.fillRect(0, 0, width, height);
	context.drawImage(image, 0, 0, width, height);

	return canvas.toDataURL('image/jpeg', quality);
}

function compressLoadedImageToTarget(image, targetBytes, config = AVATAR_CONFIG) {
	let dimensions = fitImageDimensions(image.width, image.height, config.maxDimension);
	let quality = config.qualityStart;

	while (true) {
		const optimizedDataUrl = renderImageToDataUrl(image, dimensions.width, dimensions.height, quality);

		if (getDataUrlByteSize(optimizedDataUrl) <= targetBytes) {
			return optimizedDataUrl;
		}

		if (quality - config.qualityStep >= 0.5) {
			quality -= config.qualityStep;
			continue;
		}

		const nextWidth = Math.round(dimensions.width * config.downscaleStep);
		const nextHeight = Math.round(dimensions.height * config.downscaleStep);

		if (Math.max(nextWidth, nextHeight) < config.minDimension) {
			break;
		}

		dimensions = {
			width: nextWidth,
			height: nextHeight
		};
		quality = config.qualityStart;
	}

	throw new Error(UI_TEXT.error);
}

function buildEncodedCvContent(cvData, passphrase) {
	const encryptedData = encryptCvPayload(cvData, passphrase);
	const payload = {
		schemaVersion: 1,
		updatedAt: new Date().toISOString(),
		encryptedData
	};

	return encodeBase64Unicode(`${JSON.stringify(payload, null, 2)}\n`);
}

function isInlineImageDataUrl(value) {
	return /^data:image\//i.test(String(value || ''));
}

function getNestedValue(source, path) {
	return path.reduce((value, key) => value?.[key], source);
}

function setNestedValue(source, path, nextValue) {
	const parent = path.slice(0, -1).reduce((value, key) => value?.[key], source);

	if (!parent) {
		return;
	}

	parent[path[path.length - 1]] = nextValue;
}

function getDataUrlByteSize(dataUrl) {
	const base64 = String(dataUrl || '').split(',')[1] || '';
	const padding = (base64.match(/=*$/) || [''])[0].length;
	return Math.max(0, Math.floor((base64.length * 3) / 4) - padding);
}

function formatBytes(value) {
	if (!value) {
		return '0 B';
	}

	if (value < 1024) {
		return `${value} B`;
	}

	return `${(value / 1024).toFixed(1)} KB`;
}

function updateProfileAvatarPreview(src, statusText) {
	selectors.avatarUploadPreview.src = src || 'default-avatar.jpg';
	selectors.avatarUploadStatus.textContent = statusText;
}

function updateGenericImagePreview(previewElement, statusElement, src, statusText) {
	previewElement.src = src || 'default-avatar.jpg';
	statusElement.textContent = statusText;
}

function normalizeTagCollection(values) {
	if (!values) {
		return [];
	}

	if (!Array.isArray(values)) {
		return splitCommaValues(values).map((item) => ({
			label: item,
			color: '#32cd32'
		}));
	}

	return values
		.map((item) => {
			if (typeof item === 'string') {
				return { label: item, color: '#32cd32' };
			}

			return {
				label: String(item.label || item.name || '').trim(),
				color: normalizeColor(item.color)
			};
		})
		.filter((item) => item.label);
}

function normalizeContributions(values) {
	if (Array.isArray(values)) {
		return values.map((item) => String(item || '').trim()).filter(Boolean).slice(0, 3);
	}

	return splitCommaValues(values).slice(0, 3);
}

function normalizeColor(value) {
	return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(String(value || '')) ? value : '#32cd32';
}

function buildTagStyle(color) {
	const safeColor = normalizeColor(color);
	return `background:${safeColor}22;border:1px solid ${safeColor}55;color:${safeColor};`;
}

function renderTagEditorList(container, values) {
	if (!container) {
		return;
	}

	const tags = normalizeTagCollection(values);
	container.innerHTML = tags.length ? renderTagEditorRows(tags) : createTagEditorRowMarkup();
}

function renderTagEditorRows(values) {
	return normalizeTagCollection(values).map((tag) => createTagEditorRowMarkup(tag)).join('');
}

function appendTagEditorRow(container, tag = { label: '', color: '#32cd32' }) {
	if (!container) {
		return;
	}

	container.insertAdjacentHTML('beforeend', createTagEditorRowMarkup(tag));
}

function handleTagRowRemoval(trigger) {
	const row = trigger.closest('.tag-editor-row');
	const list = trigger.closest('.tag-editor-list');

	if (!row || !list) {
		return;
	}

	const rows = list.querySelectorAll('.tag-editor-row');

	if (rows.length === 1) {
		row.querySelector('[data-tag-field="label"]').value = '';
		row.querySelector('[data-tag-field="color"]').value = '#32cd32';
		return;
	}

	row.remove();
}

function collectTagEditorRows(container) {
	const rows = Array.from(container?.querySelectorAll('.tag-editor-row') || []);
	const tags = [];

	for (const row of rows) {
		const label = row.querySelector('[data-tag-field="label"]').value.trim();
		const color = normalizeColor(row.querySelector('[data-tag-field="color"]').value);

		if (!label) {
			continue;
		}

		tags.push({ label, color });
	}

	return tags;
}

function createTagEditorRowMarkup(tag = { label: '', color: '#32cd32' }) {
	return `
		<div class="tag-editor-row">
			<input type="text" class="tag-editor-input" data-tag-field="label" placeholder="Tag name" value="${escapeAttribute(tag.label || '')}" />
			<input type="color" class="tag-editor-color" data-tag-field="color" value="${escapeAttribute(normalizeColor(tag.color))}" />
			<button type="button" class="btn action-btn action-btn-delete tag-editor-remove" data-action="remove-tag-row">Delete</button>
		</div>
	`;
}

function updateContactLink(element, href, text) {
	element.textContent = text;

	if (!href) {
		element.removeAttribute('href');
		element.setAttribute('aria-disabled', 'true');
		element.tabIndex = -1;
		return;
	}

	element.href = href;
	element.removeAttribute('aria-disabled');
	element.removeAttribute('tabindex');
}

function splitCommaValues(value) {
	return String(value || '')
		.split(',')
		.map((item) => item.trim())
		.filter(Boolean);
}

function formatDateRange(start, end) {
	if (!start && !end) {
		return '';
	}

	const startLabel = start ? formatMonthValue(start) : '';
	const endLabel = end ? formatMonthValue(end) : 'Present';
	return [startLabel, endLabel].filter(Boolean).join(' - ');
}

function formatMonthValue(value) {
	if (!value) {
		return '';
	}

	const date = new Date(`${value}-01T00:00:00`);

	if (Number.isNaN(date.getTime())) {
		return value;
	}

	return new Intl.DateTimeFormat('en', {
		month: 'short',
		year: 'numeric'
	}).format(date);
}

function formatMeta(parts) {
	return parts
		.map((part) => String(part || '').trim())
		.filter(Boolean)
		.join(' · ');
}

function getInitials(value) {
	return String(value || '')
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 2)
		.map((part) => part[0].toUpperCase())
		.join('') || 'CV';
}

function showError(element, message) {
	element.textContent = message;
	element.classList.remove('hidden');
}

function clearError(element) {
	element.textContent = '';
	element.classList.add('hidden');
}

function toggleButtonLoading(button, isLoading) {
	if (!button) {
		return;
	}

	button.classList.toggle('loading', isLoading);
	button.disabled = isLoading;
}

function renderFatalError(message) {
	const markup = `<p class="placeholder-text">${escapeHtml(message)}</p>`;
	selectors.summaryContent.innerHTML = markup;
	selectors.skillsContainer.innerHTML = markup;
	selectors.experienceList.innerHTML = markup;
	selectors.educationList.innerHTML = markup;
	selectors.projectsList.innerHTML = markup;
	selectors.awardsList.innerHTML = markup;
}

function renderNoDataState() {
	renderFatalError(UI_TEXT.noData);
}

function encodeBase64Unicode(value) {
	return btoa(unescape(encodeURIComponent(value)));
}

function createId(prefix) {
	return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function escapeHtml(value) {
	return String(value ?? '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

function escapeAttribute(value) {
	return escapeHtml(value);
}
