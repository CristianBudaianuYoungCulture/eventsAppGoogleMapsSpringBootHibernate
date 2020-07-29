package com.events.eventsapp.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class RelationshipModel implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "relationship_id", nullable = false, unique = true)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "user_alpha")
	private UserModel alphaUserModel;

	@ManyToOne
	@JoinColumn(name = "user_beta")
	private UserModel betaUserModel;

	@Column(name = "relationship_is_friend")
	private boolean isFriend;

	@Column(name = "relationship_is_blocked")
	private boolean isBlocked;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public UserModel getAlphaUserModel() {
		return alphaUserModel;
	}

	public void setAlphaUserModel(UserModel alphaUserModel) {
		this.alphaUserModel = alphaUserModel;
	}

	public UserModel getBetaUserModel() {
		return betaUserModel;
	}

	public void setBetaUserModel(UserModel betaUserModel) {
		this.betaUserModel = betaUserModel;
	}

	public boolean isFriend() {
		return isFriend;
	}

	public void setFriend(boolean friend) {
		isFriend = friend;
	}

	public boolean isBlocked() {
		return isBlocked;
	}

	public void setBlocked(boolean blocked) {
		isBlocked = blocked;
	}
}